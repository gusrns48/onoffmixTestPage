import React, { useState } from 'react'
import { mypageStyle } from '../../style/mypage'

interface IProduct {
  itemName: string
  max: string
  now: string
  link: string
  imgLink: string
}

type IOriginData = {
  [key in string]: {
    [key in string]: IProduct[]
  }
}

function Mypage() {
  const [data, setData] = useState<IProduct[]>([])
  const classes = mypageStyle()
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <div className={classes.mypage}>
      <div className={classes.person}>은향 조</div>
      {data.map((v, i) => (
            <a className={classes.codi} href={v.link} key={`product-content-${i}`}>
              <div className={classes.item}>
                <div className={classes.img}>
                  <img src={v.imgLink} alt="" />
                </div>
                <div className={classes.one}>{v.itemName}</div>
                <div className={classes.bottom}>
                  <div>{v.now}/{v.max}명</div>
          
                </div>
              </div>
            </a>
      ))}
    </div>
  )
}

export default Mypage
