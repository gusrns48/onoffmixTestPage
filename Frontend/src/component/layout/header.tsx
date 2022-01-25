import { headerStyle } from '../../style/layout/header'

function Header() {
  const classes = headerStyle()
  const userId = localStorage.getItem('userId')

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.title}>
            <a href="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
              onoffmix.com
            </a>
            <div className={classes.bottom}>
              {userId !== null && <div><br/>&emsp;{userId}님 반갑습니다 !</div>}
            </div>
          </div>

          <div className={classes.etc}>
            {userId === null ? (
              <a href="/login" style={{ textDecoration: 'none' }}>
                <div className={classes.login}>로그인</div>
              </a>
            ) : (
              <a
                href="/" style={{ textDecoration: 'none' }}
                onClick={() => {
                  localStorage.removeItem('userId')
                  localStorage.removeItem('userInfo')
                }}
              >
                <div className={classes.login}>로그아웃</div>
              </a>
            )}
            
            {userId === null ? (
              <a href="/signup" style={{ textDecoration: 'none' }}>
                <div className={classes.login}>회원가입</div>
              </a>
            ) : (
              <div className={classes.bottom}>
                <a href="/mainclass">모집 중인 모임&emsp;</a>
                <a href="/newclass">모임개설&emsp;</a>
                <a href="/masterclass">개설한 모임&emsp;</a>
                <a href="/myclass">신청모임 보기</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header