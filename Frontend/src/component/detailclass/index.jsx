import { ContactlessOutlined, Filter1TwoTone } from '@material-ui/icons';
import React, { useEffect, useState, Component } from 'react'
import { productStyle } from '../../style/product';
import Axios from 'axios';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

const Detailclass = ({ history, location, match }) => {
  const style = productStyle()
  const userId = localStorage.getItem('userId');

  const [content, setContent] = useState({
    group1join: "",
  })

  const [viewContent, setViewContent] = useState([]);

  let { no } = match.params ;

  useEffect(()=>{
    Axios.get('http://localhost:3001/get').then((response)=>{
      response.data = response.data[no-1];
      setViewContent(response.data);
    });
  },[])

  const submit = ()=>{
    Axios.post('http://localhost:3001/insert', {
      group1join: userId,
      title: viewContent.title,
    });
    alert('등록 완료!');
    window.location.href = '/';
  };

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value
    })
  };

  const group1 = (viewContent.group1||'').split('/');
  const group2 = (viewContent.group2||'').split('/');
  const group3 = (viewContent.group3||'').split('/');

  return(
    
    <div className={style.product}>
      <div className={style.bigname}>{viewContent.title}&emsp;ID : {viewContent.key}</div><br/>
      <hr/><br/>
      <div style={{ border: '3px solid #333'}}>
        <div className={style.title}>내용</div>
        <br/><div className={style.contents}>{viewContent.contents}</div>
        <br/><hr/>

        <div className={style.title}>그룹1</div><br/>
        <div className={style.contents}>그룹명 : {group1[0]}</div>
        <div className={style.contents}>신청기간 : {group1[1]}~{group1[2]}</div>
        <div className={style.contents}>행사날짜 : {group1[3]}~{group1[4]}</div>
        <div className={style.contents}>정원 : 0/{group1[5]}<button onClick={submit}>그룹1 신청</button></div>

        {group2[0]!=='' &&
          <div>
            <hr/>
            <div className={style.title}>그룹2</div><br />
            <div className={style.contents}>그룹명 : {group2[0]}</div>
            <div className={style.contents}>신청기간 : {group2[1]}~{group2[2]}</div>
            <div className={style.contents}>행사날짜 : {group2[3]}~{group2[4]}</div>
            <div className={style.contents}>정원 : 0/{group2[5]}<button>그룹2 신청</button></div>
          </div>
        }

        {group3[0]!=='' &&
          <div>
            <hr/>
            <div className={style.title}>그룹3</div><br />
            <div className={style.contents}>그룹명 : {group3[0]}</div>
            <div className={style.contents}>신청기간 : {group3[1]}~{group3[2]}</div>
            <div className={style.contents}>행사날짜 : {group3[3]}~{group3[4]}</div>
            <div className={style.contents}>정원 : 0/{group3[5]}<button>그룹3 신청</button></div>
          </div>
        }

        


      </div>
    </div>
  )
}

export default Detailclass