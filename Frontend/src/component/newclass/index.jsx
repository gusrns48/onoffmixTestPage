import React, { Component, useEffect, useState } from 'react'
import dayjs from 'dayjs';

import newclassStyle from '../../style/newclass';

const product = {
  maxWidth: '1285px',
  margin: '0 auto',
  color: '#ffffff',
  textAlign: 'left',
  padding: '30px 0px',
  minHeight: 'calc(100% - 314px)',
}

const bigname = {
  margin: '10px 0px',
  padding: '0px 10px',
  fontSize: '25px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
}

const category= {
  margin: '10px 0px',
  padding: '0px 10px',
  fontSize: '22px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '26px',
}

const smcategory= {
  margin: '10px 0px',
  padding: '0px 10px',
  fontSize: '15px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
}

const titleStyle = {
  margin: '10px 10px',
  padding: '0px 10px',
  fontSize: '30px',
  marginBottom: '26px',
  fontWeight: 'bold',
}

const textarea= {
  margin: '10px 10px',
  padding: '0px 10px',
  fontSize: '15px',
  overflow: 'hidden',
  width: '400px',
  height: '100px',
  marginBottom: '26px',
  fontWeight: 'bold',
}

const button= {
  width: '100%',
  marginBottom: '20px',
  '&>button': {
    width: '100%',
    height: '40px',
    backgroundColor: '#3B434D',
    color: '#ffffff',
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '3px',
    transition: 'ease-in 0.2s background-color',
    '&:hover': {
      backgroundColor: '#4d5663',
    },
  },
}

const date={
  margin: '10px 10px',
  padding: '0px 10px',
  overflow: 'hidden',
  marginBottom: '26px',
  fontWeight: 'bold',
}

const box= {
  margin: '10px 10px',
  padding: '0px 10px',
  overflow: 'hidden',
  marginBottom: '26px',
  fontWeight: 'bold',
}

const NewClass = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [groups, setGroups] = useState([
    {
      name: '',
      startPutDate: '',
      donePutDate: '',
      startEventDate: '',
      doneEventDate: '',
      maxNum: '',
      approval: 'directly'
    }
  ]);

  const addGroup = () => {
    if (groups.length >= 3) {
      alert('그룹은 3개까지 추가 가능합니다!');
      return;
    }

    setGroups(prevGroups => [
      ...prevGroups,
      {
        name: '',
        startPutDate: '',
        donePutDate: '',
        startEventDate: '',
        doneEventDate: '',
        maxNum: '',
        approval: 'directly'
      }
    ]);
  };

  const upload = () => {
    const postPayload = {
      title,
      contents,
      master: localStorage.getItem('userId'),
    };

    if (groups.length >= 1) {
      postPayload.group1 = `${groups[0].name}/${groups[0].startPutDate}/${groups[0].donePutDate}/${groups[0].startEventDate}/${groups[0].doneEventDate}/${groups[0].maxNum}/${groups[0].approval}`;
    }

    if (groups.length >= 2) {
      postPayload.group2 = `${groups[1].name}/${groups[1].startPutDate}/${groups[1].donePutDate}/${groups[1].startEventDate}/${groups[1].doneEventDate}/${groups[1].maxNum}/${groups[1].approval}`;
    }

    if (groups.length >= 3) {
      postPayload.group3 = `${groups[2].name}/${groups[2].startPutDate}/${groups[2].donePutDate}/${groups[2].startEventDate}/${groups[2].doneEventDate}/${groups[2].maxNum}/${groups[2].approval}`;
    }

    fetch("http://localhost:3001/newclass", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(postPayload),
    });

    alert("모임 게시물이 업로드 되었습니다.");
    window.location.href = '/';
  };

  return (
    <div style={product}>
        <div style={bigname}>모임개설 페이지</div>
        <br/><hr/><br/>
        <div style={smcategory}>제목</div>
        <input type="text" style={titleStyle} placeholder="제목" value={title} onChange={(event) => { setTitle(event.target.value); }}></input><p></p>
        <div style={smcategory}>내용</div>
        <textarea style={textarea} placeholder="내용" value={contents} onChange={(event) => {
          setContents(event.target.value);
        }}></textarea>
        <hr/><br/>
        {
          groups.map((group, idx) => (
            <div key={`group_${idx}`}>
              <div style={category}>그룹 {idx + 1}</div>
              <div style={smcategory}>그룹이름</div>
              <input type="text" style={box} placeholder='그룹이름' value={group.name} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx) {
                    return {
                      ...prevGroup,
                      name: event.target.value
                    }
                  }

                  return prevGroup;
                }));
              }} />
              <div style={smcategory}>신청기간</div>
              <input type="date" style={date} min={dayjs().format('YYYY-MM-DD')} value={group.startPutDate} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx) {
                    return {
                      ...prevGroup,
                      startPutDate: event.target.value
                    }
                  }

                  return prevGroup;
                }));
              }} />~
              <input type="date" style={date} min={group.startPutDate ? dayjs(group.startPutDate).add(1, 'day').format('YYYY-MM-DD') : dayjs().add(1, 'day').format('YYYY-MM-DD')} value={group.donePutDate} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx) {
                    return {
                      ...prevGroup,
                      donePutDate: event.target.value
                    }
                  }

                  return prevGroup;
                }));
              }} />
              <div style={smcategory}>행사기간</div>
              <input type="date" style={date} min={group.donePutDate ? dayjs(group.donePutDate).add(1, 'day').format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')} value={group.startEventDate} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx) {
                    return {
                      ...prevGroup,
                      startEventDate: event.target.value
                    }
                  }

                  return prevGroup;
                }));
              }}></input>~
              <input type="date" style={date} min={group.donePutDate ? dayjs(group.donePutDate).add(1, 'day').format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')} value={group.doneEventDate} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx) {
                    return {
                      ...prevGroup,
                      doneEventDate: event.target.value
                    }
                  }

                  return prevGroup;
                }));
              }} />
              <div style={smcategory}>정원(최대 인원)</div>
              <input type="number" style={box} placeholder="num" max="100" min='1' value={group.maxNum} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx) {
                    return {
                      ...prevGroup,
                      maxNum: event.target.value
                    }
                  }

                  return prevGroup;
                }));
              }} ></input>
              <div style={smcategory}>승인 방법</div>
              <input type="radio" style={box} checked={group.approval === 'directly'} name={`approvalDirectly${idx}`} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx && event.target.checked) {
                    return {
                      ...prevGroup,
                      approval: 'directly'
                    }
                  }

                  return prevGroup;
                }));
              }} value="directly"></input>
              <label htmlFor={`approvalDirectly${idx}`}>직접승인</label>
              <input type="radio" style={box} checked={group.approval === 'firstCome'} value="firstCome" name={`approvalFirstCome${idx}`} onChange={(event) => {
                setGroups((prevGroups) => prevGroups.map((prevGroup, prevIdx) => {
                  if (prevIdx === idx && event.target.checked) {
                    return {
                      ...prevGroup,
                      approval: 'firstCome'
                    }
                  }

                  return prevGroup;
                }));
              }}></input>
              <label htmlFor={`approvalFirstCome${idx}`}>선착순</label><br/><br/>
              <button style={box} onClick={addGroup}>그룹 추가</button>
              <br/><hr/><br/>
            </div>
          ))
        }
        <button type="submit" style={button} onClick={upload}>게시물 작성 완료</button>
        <div style={category} id='result'></div>
      </div>
  );
};

// export default class App extends Component {

//   state = {
//     title : "",
//     contents : "",

//     groupName1 : "",
//     groupName2 : "",
//     groupName3 : "",

//     startPutDate1 : "",
//     startPutDate2 : "",
//     startPutDate3 : "",
//     donePutDate1 : "",
//     donePutDate2 : "",
//     donePutDate3 : "",

//     startEventDate1 : "",
//     startEventDate2 : "",
//     startEventDate3 : "",
//     doneEventDate1 : "",
//     doneEventDate2 : "",
//     doneEventDate3 : "",
    
//     maxNum1 : "",
//     maxNum2 : "",
//     maxNum3 : "",
//     approval1 : "",
//     approval2 : "",
//     approval3 : "",
    
//     group1 : "",
//     group2 : "",
//     group3 : "",

//     master : "",
//   }
  
//   err = ()=>{
//     alert("그룹은 3개까지만 추가할 수 있습니다. 그룹을 더 추가하고 싶으신 경우 고객센터로 문의 바랍니다.")
//     return
//   }

//   handleChange =(e)=>{
//     this.setState({
//       [e.target.name] : e.target.value,
//     });
//   }

//   submitId = ()=>{
//     if(this.state.title==""){
//       alert("제목을 입력하세요.")
//       return
//     }

//     const userId = localStorage.getItem('userId');

//     const approvalChoice1 = document.getElementsByName('approval1');

//     approvalChoice1.forEach((node) => {
//       if(node.checked)  {
//         this.state.approval1
//           = node.value;
//       }
//     })

//     const approvalChoice2 = document.getElementsByName('approval2');

//     approvalChoice2.forEach((node) => {
//       if(node.checked)  {
//         this.state.approval2
//           = node.value;
//       }
//     })

//     const approvalChoice3 = document.getElementsByName('approval3');

//     approvalChoice3.forEach((node) => {
//       if(node.checked)  {
//         this.state.approval3
//           = node.value;
//       }
//     })

//     this.state.group1 = this.state.groupName1 + "/" + this.state.startPutDate1 + "/" + this.state.donePutDate1 + "/" + this.state.startEventDate1 + "/" + this.state.doneEventDate1 + "/" + this.state.maxNum1 + "/" + this.state.approval1;
//     this.state.group2 = this.state.groupName2 + "/" + this.state.startPutDate2 + "/" + this.state.donePutDate2 + "/" + this.state.startEventDate2 + "/" + this.state.doneEventDate2 + "/" + this.state.maxNum2 + "/" + this.state.approval2;
//     this.state.group3 = this.state.groupName3 + "/" + this.state.startPutDate3 + "/" + this.state.donePutDate3 + "/" + this.state.startEventDate3 + "/" + this.state.doneEventDate3 + "/" + this.state.maxNum3 + "/" + this.state.approval3;

//     const post ={
//       title : this.state.title,
//       contents : this.state.contents,
//       group1 : this.state.group1,
//       group2 : this.state.group2,
//       group3 : this.state.group3,
//       master : userId,
//     };
    

//     fetch("http://localhost:3001/idplz", {
//       method : "post", // 통신방법
//       headers : {
//         "content-type" : "application/json",
//       },
//       body : JSON.stringify(post),
//     })
//     .then((res)=>res.json())
//     .then((json)=>{
//       this.setState({
//         title : json.text,
//         contents : json.text,

//         group1 : json.text,
//         group2 : json.text,
//         group3 : json.text,

//         master : json.text,
//       });
//     });
//     alert("모임 게시물이 업로드 되었습니다.")
//     window.location.href = '/'
//   };
  
//   render(){
//     const product= {
//       maxWidth: '1285px',
//       margin: '0 auto',
//       color: '#ffffff',
//       textAlign: 'left',
//       padding: '30px 0px',
//       minHeight: 'calc(100% - 314px)',
//     }
//     const bigname = {
//       margin: '10px 0px',
//       padding: '0px 10px',
//       fontSize: '25px',
//       fontWeight: 'bold',
//       display: 'flex',
//       justifyContent: 'space-between',
//     }
//     const category= {
//       margin: '10px 0px',
//       padding: '0px 10px',
//       fontSize: '22px',
//       fontWeight: 'bold',
//       display: 'flex',
//       justifyContent: 'space-between',
//       marginBottom: '26px',
//     }
//     const smcategory= {
//       margin: '10px 0px',
//       padding: '0px 10px',
//       fontSize: '15px',
//       fontWeight: 'bold',
//       display: 'flex',
//       justifyContent: 'space-between',
//     }
//     const title= {
//       margin: '10px 10px',
//       padding: '0px 10px',
//       fontSize: '30px',
//       marginBottom: '26px',
//       fontWeight: 'bold',
//     }
//     const textarea= {
//       margin: '10px 10px',
//       padding: '0px 10px',
//       fontSize: '15px',
//       overflow: 'hidden',
//       width: '400px',
//       height: '100px',
//       marginBottom: '26px',
//       fontWeight: 'bold',
//     }
//     const date={
//       margin: '10px 10px',
//       padding: '0px 10px',
//       overflow: 'hidden',
//       marginBottom: '26px',
//       fontWeight: 'bold',
//     }
//     const box= {
//       margin: '10px 10px',
//       padding: '0px 10px',
//       overflow: 'hidden',
//       marginBottom: '26px',
//       fontWeight: 'bold',
//     }
//     const button= {
//       width: '100%',
//       marginBottom: '20px',
//       '&>button': {
//         width: '100%',
//         height: '40px',
//         backgroundColor: '#3B434D',
//         color: '#ffffff',
//         border: 'none',
//         outline: 'none',
//         fontSize: '15px',
//         cursor: 'pointer',
//         borderRadius: '3px',
//         transition: 'ease-in 0.2s background-color',
//         '&:hover': {
//           backgroundColor: '#4d5663',
//         },
//       },
//     }

//     return(
//       <div style={product}>
//         <div style={bigname}>모임개설 페이지</div>
//         <br/><hr/><br/>

//         <div style={smcategory}>제목</div>
//         <input type="text" onChange={this.handleChange} style={title} placeholder="제목" name='title'></input><p></p>
//         <div style={smcategory}>내용</div>
//         <textarea onChange={this.handleChange} style={textarea} placeholder="내용" name="contents"></textarea>
//         <hr/><br/>

//         <hr/><br/>
//         <div id="group1">
//           <div style={category}>그룹1</div>
//           <div style={smcategory}>그룹이름</div>
//           <input type="text" onChange={this.handleChange} style={box} placeholder='그룹이름' name="groupName1"></input>
//           <div style={smcategory}>신청기간</div>
//           <input type="date" onChange={this.handleChange} style={date} name="startPutDate1" min="2022-01-18"></input>~
//           <input type="date" onChange={this.handleChange} style={date} name="donePutDate1" min="2022-01-18"></input>
//           <div style={smcategory}>행사기간</div>
//           <input type="date" onChange={this.handleChange} style={date} name="startEventDate1" min="2022-01-19"></input>~
//           <input type="date" onChange={this.handleChange} style={date} name="doneEventDate1" min="2022-01-19"></input>
//           <div style={smcategory}>정원(최대 인원)</div>
//           <input type="number" onChange={this.handleChange} style={box} placeholder="num" max="100" min='1' name="maxNum1"></input>
//           <div style={smcategory}>승인 방법</div>
//           <input type="radio" style={box} name="approval1" value="directly"></input>
//           <label htmlFor="louie">직접승인</label>
//           <input type="radio" style={box} name="approval1" value="firstCome"></input>
//           <label htmlFor="louie">선착순</label><br/><br/>
//           <button style={box} onClick={this.showGroup2}>그룹 추가</button>
//           <br/><hr/><br/>
//         </div>
//         <hr/><br/>
//         <button type="submit" style={button} onClick = {this.submitId}>게시물 작성 완료</button>
//         <div style={category} id='result'></div>
//       </div>
//     )
//   }
// }

export default NewClass;