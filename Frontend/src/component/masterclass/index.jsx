import { ContactlessOutlined, Filter1TwoTone } from '@material-ui/icons';
import React, { useEffect, useState, Component } from 'react'
import { mainclassStyle } from '../../style/mainclass';
import Axios from 'axios';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

function Masterclass(props){
  const style = mainclassStyle()
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

  const group2mem=(group2join)=>{
    var group2member = group2join
    for(var i=0; i<group2member.length-2; i++) {group2member[i] += ', '}
    return group2member
  }

  const group3mem=(group3join)=>{
    var group3member = group3join
    for(var i=0; i<group3member.length-2; i++) {group3member[i] += ', '}
    return group3member
  }

  const [group1Wait, setGroup1Wait] = useState('')
  const [group2Wait, setGroup2Wait] = useState('')
  const [group3Wait, setGroup3Wait] = useState('')
  
  const updateMem1 = (title)=>{
    Axios.post('http://localhost:3001/updateMem1', {
      group1wait: group1Wait,
      group1join: group1Wait,
      title: title,
    });
    alert('승인 완료!');
    window.location.href = '/masterclass';
  };

  const updateMem2 = (title)=>{
    Axios.post('http://localhost:3001/updateMem2', {
      group2wait: group2Wait,
      group2join: group2Wait,
      title: title,
    });
    alert('승인 완료!');
    window.location.href = '/masterclass';
  };

  const updateMem3 = (title)=>{
    Axios.post('http://localhost:3001/updateMem3', {
      group3wait: group3Wait,
      group3join: group3Wait,
      title: title,
    });
    alert('승인 완료!');
    window.location.href = '/masterclass';
  };

  const redateMem1 = (title)=>{
    Axios.post('http://localhost:3001/redateMem1', {
      group1wait: group1Wait,
      group1join: group1Wait,
      title: title,
    });
    alert('승인 완료!');
    window.location.href = '/masterclass';
  };

  const redateMem2 = (title)=>{
    Axios.post('http://localhost:3001/redateMem2', {
      group2wait: group2Wait,
      group2join: group2Wait,
      title: title,
    });
    alert('승인 완료!');
    window.location.href = '/masterclass';
  };

  const redateMem3 = (title)=>{
    Axios.post('http://localhost:3001/redateMem3', {
      group3wait: group3Wait,
      group3join: group3Wait,
      title: title,
    });
    alert('승인 완료!');
    window.location.href = '/masterclass';
  };

  return(
    <div className={style.product}>
      <div className={style.bigname}>내가 개설한 모임 ID : {userId}</div><br/>
      <hr/><br/>
      {viewContent.map(element =>
        <div style={{ border: '5px solid #c68a12'}}>
          {element.master === userId &&
            <div className={style.product}>
              <div className={style.title}>{element.title}</div>
              <div className={style.contents}>{element.contents}</div><br/><hr/>
              <div className={style.contents}>그룹1 신청자 명단 : {group1mem((element.group1join||'').split('/'))}</div>
              {(element.group1||'').split('/')[6] === 'directly' ?
                (<div>
                  <div className={style.contents}>그룹1 인원 : {(element.group1join||'').split('/').length-1}/{(element.group1||'').split('/')[5]}
                      <div>
                        <div className={style.contents}>그룹 1 승인 대기 명단 : {group1mem((element.group1wait||'').split('/'))}</div>
                        <input type="text" className={style.contents} placeholder='아이디' onChange={(event) => {setGroup1Wait(event.target.value);}}></input>
                        <a className={style.login} onClick={()=>updateMem1(element.title)}>승인허가</a><br/><br/>

                        <div className={style.contents}>그룹 1 승인 제거</div>
                        <input type="text" className={style.contents} placeholder='아이디' onChange={(event) => {setGroup1Wait(event.target.value);}}></input>
                        <a className={style.login} onClick={()=>redateMem1(element.title)}>승인제거</a>

                      </div>
                  </div>
                </div>) : (<div className={style.contents}>그룹1 인원 : {(element.group1join||'').split('/').length-1}/{(element.group1||'').split('/')[5]}</div>)
              }<br/><hr/>

              {(element.group2||'').split('/')[0] !== '' && <div className={style.contents}>그룹2 신청자 명단 : {group2mem((element.group2join||'').split('/'))}</div>}
              {(element.group2||'').split('/')[6] === 'directly' && (element.group2||'').split('/')[0] !== '' &&
                <div>
                  <div className={style.contents}>그룹2 인원 : {(element.group2join||'').split('/').length-1}/{(element.group2||'').split('/')[5]}
                      <div>
                        <div className={style.contents}>그룹 2 승인 대기 명단 : {group2mem((element.group2wait||'').split('/'))}</div>
                        <input type="text" className={style.contents} placeholder='아이디' onChange={(event) => {setGroup2Wait(event.target.value);}}></input>
                        <a className={style.login} onClick={()=>updateMem2(element.title)}>승인허가</a><br/><br/>

                        <div className={style.contents}>그룹 2 승인 제거</div>
                        <input type="text" className={style.contents} placeholder='아이디' onChange={(event) => {setGroup2Wait(event.target.value);}}></input>
                        <a className={style.login} onClick={()=>redateMem2(element.title)}>승인제거</a>

                      </div>
                  </div>
                </div>
              }
              {(element.group2||'').split('/')[6] === 'firstCome' && (element.group2||'').split('/')[0] !== '' &&
                <div className={style.contents}>그룹2 인원 : {(element.group2join||'').split('/').length-1}/{(element.group2||'').split('/')[5]}</div>
              }<br/><hr/>

              {(element.group3||'').split('/')[0] !== '' && <div className={style.contents}>그룹3 신청자 명단 : {group3mem((element.group3join||'').split('/'))}</div>}
              {(element.group3||'').split('/')[6] === 'directly' && (element.group3||'').split('/')[0] !== '' &&
                <div>
                  <div className={style.contents}>그룹3 인원 : {(element.group3join||'').split('/').length-1}/{(element.group3||'').split('/')[5]}
                      <div>
                        <div className={style.contents}>그룹 3 승인 대기 명단 : {group3mem((element.group3wait||'').split('/'))}</div>
                        <input type="text" className={style.contents} placeholder='아이디' onChange={(event) => {setGroup3Wait(event.target.value);}}></input>
                        <a className={style.login} onClick={()=>updateMem3(element.title)}>승인허가</a><br/><br/>

                        <div className={style.contents}>그룹 3 승인 제거</div>
                        <input type="text" className={style.contents} placeholder='아이디' onChange={(event) => {setGroup3Wait(event.target.value);}}></input>
                        <a className={style.login} onClick={()=>redateMem3(element.title)}>승인제거</a>
                      </div>
                  </div>
                </div>
              }
              {(element.group3||'').split('/')[6] === 'firstCome' && (element.group3||'').split('/')[0] !== '' &&
                <div className={style.contents}>그룹3 인원 : {(element.group3join||'').split('/').length-1}/{(element.group3||'').split('/')[5]}</div>
              }
            </div>
          }
        </div>
        )}
    </div>
  )
}

export default Masterclass