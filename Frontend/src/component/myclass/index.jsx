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

    const delmem1 = (title)=>{
      Axios.post('http://localhost:3001/delmem1', {
        group1wait: userId,
        group1join: userId,
        title: title,
      });
      alert('취소 완료!');
      window.location.href = '/myclass';
    };

    const delmem2 = (title)=>{
      Axios.post('http://localhost:3001/delmem2', {
        group2wait: userId,
        group2join: userId,
        title: title,
      });
      alert('취소 완료!');
      window.location.href = '/myclass';
    };

    const delmem3 = (title)=>{
      Axios.post('http://localhost:3001/delmem3', {
        group3wait: userId,
        group3join: userId,
        title: title,
      });
      alert('취소 완료!');
      window.location.href = '/myclass';
    };
  
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
                <div className={style.contents}>{(element.group1||'').split('/')[0]}</div>
                <div className={style.contents}>{element.group1join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
                <button className={style.button} onClick={()=>delmem1(element.title)}>취소하기</button>
              </div>
            }
            {element.group1wait.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{(element.group1||'').split('/')[0]}</div>
                <div className={style.contents}>{element.group1join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
                <button className={style.button} onClick={()=>delmem1(element.title)}>취소하기</button>
              </div>
            }

            {element.group2join.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{(element.group2||'').split('/')[0]}</div>
                <div className={style.contents}>{element.group2join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
                <button className={style.button} onClick={()=>delmem2(element.title)}>취소하기</button>
              </div>
            }
            {element.group2wait.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{(element.group2||'').split('/')[0]}</div>
                <div className={style.contents}>{element.group2join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
                <button className={style.button} onClick={()=>delmem2(element.title)}>취소하기</button>
              </div>
            }

            {element.group3join.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{(element.group3||'').split('/')[0]}</div>
                <div className={style.contents}>{element.group3join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
                <button className={style.button} onClick={()=>delmem3(element.title)}>취소하기</button>
              </div>
            }
            {element.group3wait.indexOf(userId) != -1 &&
              <div>
                <div className={style.title}>{element.title}</div>
                <div className={style.contents}>{element.contents}</div><br/>
                <div className={style.contents}>{(element.group3||'').split('/')[0]}</div>
                <div className={style.contents}>{element.group3join.indexOf(userId) != -1 ? (<a>승인 상태 : 승인 완료</a>) : (<a>승인 상태 : 승인 대기</a>)}</div>
                <button className={style.button} onClick={()=>delmem3(element.title)}>취소하기</button>
              </div>
            }
          </div>
          )}
      </div>
    )
  }
  
  export default Myclass