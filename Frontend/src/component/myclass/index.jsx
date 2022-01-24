import React, { useEffect, useState, Component } from 'react'
import { productStyle } from '../../style/product';
import Axios from 'axios';

function Myclass(props){
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
        <div className={style.bigname}>내가 신청한 모임 ID : {userId}</div><br/>
        <hr/><br/>
        {viewContent.map(element =>
          <div style={{ border: '3px solid #333'}}>
            {element.group1join.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{element.group1join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
              </div>
            }
            {element.group1wait.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{element.group1join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
              </div>
            }
          </div>
          )}
      </div>
    )
  }
  
  export default Myclass