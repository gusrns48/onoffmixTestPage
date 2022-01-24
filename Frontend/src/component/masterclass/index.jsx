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

  const group1mem=(group1join)=>{
    var group1member = group1join
    for(var i=0; i<group1member.length-2; i++) {group1member[i] += ', '}
    return group1member
  }

  const changemem=()=>{
    
  }

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
              <div className={style.contents}>그룹1 신청자 명단 : {group1mem((element.group1join||'').split('/'))}</div>
              {(element.group1||'').split('/')[6] === 'directly' && <div className={style.contents}>그룹 1 승인 대기 명단 : {group1mem((element.group1wait||'').split('/'))}</div>}
              <div className={style.contents}>그룹1 인원 : {(element.group1join||'').split('/').length-1}/{(element.group1||'').split('/')[5]}</div>
              
            </div>
          }
        </div>
        )}
    </div>
  )
}

export default Masterclass