import { ContactlessOutlined, Filter1TwoTone } from '@material-ui/icons';
import React, { useEffect, useState, Component } from 'react'
import { productStyle } from '../../style/product';
import Axios from 'axios';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

function Masterclass(props){
  const style = productStyle()
  const [viewContent, setViewContent] = useState([]);

  const userId = localStorage.getItem('userId');

  useEffect(()=>{
    Axios.get('http://localhost:3001/get').then((response)=>{
      response.data = response.data;
      setViewContent(response.data);
    });

  },[])

  return(
    <div className={style.product}>
      <div className={style.bigname}>내가 개설한 모임 ID : {userId}</div><br/>
      <hr/><br/>
      {viewContent.map(element =>
        <div style={{ border: '3px solid #333'}}>
          {element.master === userId &&
            <div>
              <div className={style.title}>{element.title}</div>
              <div className={style.contents}>{element.contents}</div><br/>
              <div className={style.contents}>그룹1 신청자 명단 : </div>
              <div className={style.contents}>그룹1 신청자수 : </div>
            </div>
          }
        </div>
        )}
    </div>
  )
}

export default Masterclass