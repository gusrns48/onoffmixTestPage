import { makeStyles } from '@material-ui/styles'
import createStyles from '@material-ui/styles/createStyles'

export const loginStyle = makeStyles(() =>
  createStyles({
    login: {
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
  })
)
