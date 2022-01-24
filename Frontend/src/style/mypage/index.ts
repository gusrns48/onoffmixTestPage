import { createStyles, makeStyles } from '@material-ui/core'

export const mypageStyle = makeStyles(() =>
  createStyles({
    mypage: {},
    topbar: {
      display: 'flex',
      width: '100%',
      height: '64px',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      alignItems: 'center',
    },

    wrapper: {
      textDecoration: 'none',
      color: '#ffffff',
    },
    item: {
      margin: '8px',
      overflow: 'hidden',
      border: '1px solid #545458',
    },
    img: {
      width: '100%',
      '&>img': {
        width: '100%',
      },
    },
    one: {
      padding: '15px',
      paddingBottom: '10px',
      overflow: 'hidden',
      fontSize: '14px',
      fontWeight: 'bold',
    },

    title: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#ffffff',
    },

    input: {
      display: 'flex', // 이거 아닌듯
    },

    menu: {
      display: 'flex',
      width: '100%',
      height: '64px',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: '15px',
    },

    name: {},

    middle: {
      display: 'flex',
      width: '100%',
      height: '220px',
      justifyContent: 'space-around',
      backgroundColor: 'Indianred',
      alignItems: 'center',
      color: '#ffffff',
    },

    center: {
      display: 'flex',
      width: '100%',
      height: '230px',
      justifyContent: 'space-around',
      backgroundColor: 'Indianred',
      alignItems: 'center',
      color: '#ffffff',
    },

    person: {
      fontSize: '20px',
    },

    follow: {
      display: 'flex',
      width: '100%',
      height: '25px',
      justifyContent: 'space-around',
      backgroundColor: 'Indianred',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: '15px',
    },

    following: {

    },

    number: {
      display: 'flex',
      width: '100%',
      height: '230px',
      justifyContent: 'space-around',
      backgroundColor: 'Indianred',
      alignItems: 'center',
      color: '#ffffff',
    },

    list: {},

    codi: {
      display: 'flex',
      width: '100%',
      height: '95px',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      alignItems: 'center',
      color: '#808080',
      fontSize: '15px',
    },

    stylist: {},

    bottom: {
      display: 'flex',
      width: '100%',
      height: '64px',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      alignItems: 'center',
      color: '#ffffff',
    },
    
    menuItem: {
      textDecoration: 'none',
      color: '#ffffff',
    },
  })
)