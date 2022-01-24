import { makeStyles } from '@material-ui/styles'
import createStyles from '@material-ui/styles/createStyles'

export const signupStyle = makeStyles(() =>
  createStyles({
    signup: {
      width: '100%',
      height: 'calc(100% - 254px)',
      backgroundColor: 'black',
    },

    container: {
      maxWidth: '450px',
      width: '100%',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      width: '100%',
      padding: '45px',
      backgroundColor: 'black',
      borderRadius: '4px',
      border: '1px solid #ffffff',
    },
    title: {
      color: '#ffffff',
      fontSize: '32px',
      textAlign: 'center',
      marginBottom: '26px',
      fontWeight: 'bold',
    },
    input: {
      marginBottom: '20px',
      '&>input': {
        width: 'calc(100% - 24px)',
        height: '40px',
        backgroundColor: 'black',
        color: '#ffffff',
        outline: 'none',
        borderRadius: '3px',
        padding: '0px 12px',
        fontSize: '15px',
        border: '1px solid #ffffff',
      },
      '&>div': {
        width: 'calc(100% - 24px)',
        height: '40px',
        backgroundColor: 'black',
        color: '#ffffff',
        outline: 'none',
        borderRadius: '3px',
        padding: '0px 12px',
        fontSize: '15px',
        border: '1px solid #ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'ease-in 0.2s all',
        '&:hover': {
          backgroundColor: '#ffffff',
          color: 'black',
        },
      },
    },
    button: {
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
    },
    a: {
      textAlign: 'center',
      fontSize: '12px',
      width: '100%',
      color: '#ffffff',
      marginBottom: '1px',

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    themeChangeButton: {
      position: 'absolute',
      right: '20px',
      top: '20px',
    },

    modal: {
      position: 'fixed',
      width: '90%',
      height: 'calc(100% - 100px)',
      marginTop: '50px',
      marginLeft: '5%',
      left: 0,
      top: 0,
      backgroundColor: '#2C3239',
      zIndex: 100,
    },

    overlay: {
      position: 'fixed',
      left: 0,
      top: 0,
      backgroundColor: 'black',
      opacity: 0.2,
      width: '100%',
      height: '100%',
      zIndex: 99,
      cursor: 'pointer',
    },

    first: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '100px',
      alignItems: 'center',
      height: 'calc(100% - 400px)',
      color: '#ffffff',
    },

    second: {
      padding: '0px 30px',
    },

    node: {
      width: '300px',
      height: '300px',
      color: '#ffffff',
      backgroundColor: '#3d454f',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      '&>svg': {
        width: '100px',
        height: '100px',
      },
      '&>div': {
        marginTop: '10px',
        fontSize: '22px',
        fontWeight: 'bold',
      },
    },

    head: {
      width: '100%',
      height: '10%',
      backgroundColor: '#FFA500',
      margin: '30px 0px',
      fontSize: '30px',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      lineHeight: '270%',
      marginTop: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    article: {
      height: '60px',
    },

    imageUpload: {
      height: '100px',
      width: '100%',
      marginTop: '8px',
      marginBottom: '7px',
      border: `1px solid #ffffff`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
    },

    upload: {
      textAlign: 'center',
      pointerEvents: 'none',
    },
    uploadIcon: {
      width: '40px',
      height: '40px',
    },

    fileName: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: '550px',
      '@media screen and (max-width: 960px)': {
        maxWidth: '430px',
      },
      '@media screen and (max-width: 600px)': {
        maxWidth: '100%',
      },
    },

    userImage: {
      display: 'flex',
      position: 'absolute',
      left: 0,
      top: 'calc(50% - 60px)',
      width: '100%',
      justifyContent: 'center',
      '&>img': {
        width: '160px',
        height: '160px',
      },
    },
  })
)
