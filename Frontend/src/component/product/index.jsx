import { ContactlessOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react'
import { productStyle } from '../../style/product';
import Axios from 'axios';

function Product() {

  const style = productStyle()

  const userId = localStorage.getItem('userId');

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/get').then((response)=>{
      setViewContent(response.data);
    });
  }, [])


  return(
    <div className={style.product}>
      <div className={style.bigname}>모집 중인 모임</div><br/>
      <hr/><br/>
      {viewContent.map(element =>
          <div style={{ border: '3px solid #333'}}>
            <div className={style.title}>{element.title}</div>
            <div className={style.contents}>{element.contents}</div>
            <div className={style.contents}>그룹 1 인원 : {(element.group1join||'').split('/').length-1}/{(element.group1||'').split('/')[5]}</div>
            {(element.group2||'').split('/')[0] !== '' && <div className={style.contents}>그룹 2 인원 : {(element.group2join||'').split('/').length-1}/{(element.group2||'').split('/')[5]}</div>}
            <div>
              {(element.group3||'').split('/')[0] !== '' && <div className={style.contents}>그룹 3 인원 : {(element.group3join||'').split('/').length-1}/{(element.group3||'').split('/')[5]}</div>}
              {element.master === userId ? (
                  <div><br/>
                    <div className={style.contents}>내 모임입니다.</div>
                  </div>
                ) : (
                  <div><br/>&ensp;
                    <a className={style.login} href={`/detailclass/${element.key}`}>신청하기</a>
                  </div>
              )}
              <br/>
            </div>
          </div>
        )}
    </div>
  )
}

export default Product