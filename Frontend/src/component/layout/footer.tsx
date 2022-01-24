import React from 'react'
import { footerStyle } from '../../style/layout/footer'

function Footer() {
  const classes = footerStyle()
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.first}>
          <div>소개</div>
          <div>이용약관</div>
          <div>개인정보취급방침</div>
          <div>고객센터</div>
        </div>

        <div className={classes.second}>본 페이지는 Test페이지입니다.</div>

        <div className={classes.third}>ⓒ2022 Onoffmix. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer
