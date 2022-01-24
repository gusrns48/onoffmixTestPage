import React from 'react'
import { productStyle } from '../../style/product';

function Myclass(props){
    const style = productStyle()

    return(
        <React.Fragment>
        <div className={style.product}>
            <div className={style.bigname}>내가 신청한 모임</div>
            <br/><hr/><br/>
            <div style={{ border: '3px solid #333'}}>
            <div className={style.title}>{props.title}</div>
            <div className={style.contents}>커피가 좋아 유학을 했다는 자체가..</div>
          </div>
        </div>
        </React.Fragment>
    )
}

export default Myclass