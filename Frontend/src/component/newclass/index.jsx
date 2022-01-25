import React, { Component, useEffect, useState } from 'react'
import dayjs from 'dayjs';

import {newclassStyle} from '../../style/newclass';

const NewClass = () => {
  const style = newclassStyle()
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
      approval: 'firstCome'
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
        approval: 'firstCome'
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
    <div className={style.product}>
        <div className={style.bigname}>모임개설 페이지</div>
        <br/><hr/><br/>
        <div className={style.smcategory}>제목</div>
        <input type="text" className={style.titleStyle} placeholder="제목" value={title} onChange={(event) => { setTitle(event.target.value); }}></input><p></p>
        <div className={style.smcategory}>내용</div>
        <textarea className={style.textarea} placeholder="내용" value={contents} onChange={(event) => {
          setContents(event.target.value);
        }}></textarea>
        <hr/><br/>
        {
          groups.map((group, idx) => (
            <div key={`group_${idx}`}>
              <div className={style.category}>그룹 {idx + 1}</div>
              <div className={style.smcategory}>그룹이름</div>
              <input type="text" className={style.box} placeholder='그룹이름' value={group.name} onChange={(event) => {
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
              <div className={style.smcategory}>신청기간</div>
              <input type="date" className={style.date} min={dayjs().format('YYYY-MM-DD')} value={group.startPutDate} onChange={(event) => {
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
              <input type="date" className={style.date} min={group.startPutDate ? dayjs(group.startPutDate).add(1, 'day').format('YYYY-MM-DD') : dayjs().add(1, 'day').format('YYYY-MM-DD')} value={group.donePutDate} onChange={(event) => {
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
              <div className={style.smcategory}>행사기간</div>
              <input type="date" className={style.date} min={group.donePutDate ? dayjs(group.donePutDate).add(1, 'day').format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')} value={group.startEventDate} onChange={(event) => {
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
              <input type="date" className={style.date} min={group.donePutDate ? dayjs(group.donePutDate).add(1, 'day').format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')} value={group.doneEventDate} onChange={(event) => {
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
              <div className={style.smcategory}>정원(최대 인원)</div>
              <input type="number" className={style.box} placeholder="num" max="100" min='1' value={group.maxNum} onChange={(event) => {
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
              <div className={style.smcategory}>승인 방법</div>
              <input type="radio" className={style.box} checked={group.approval === 'directly'} name={`approvalDirectly${idx}`} onChange={(event) => {
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
              <input type="radio" className={style.box} checked={group.approval === 'firstCome'} value="firstCome" name={`approvalFirstCome${idx}`} onChange={(event) => {
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
              <button className={style.box} onClick={addGroup}>그룹 추가</button>
              <br/><hr/><br/>
            </div>
          ))
        }
        <button type="submit" className={style.button} onClick={upload}>게시물 작성 완료</button>
        <div className={style.category} id='result'></div>
      </div>
  );
};

export default NewClass;