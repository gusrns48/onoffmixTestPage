import { makeStyles } from '@material-ui/styles'
import createStyles from '@material-ui/styles/createStyles'

export const newclassStyle = makeStyles(() =>
  createStyles({
    product : {
      maxWidth: '1285px',
      margin: '0 auto',
      color: '#ffffff',
      textAlign: 'left',
      padding: '30px 0px',
      minHeight: 'calc(100% - 314px)',
    },
    bigname : {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '25px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
    },
    category: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '22px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '26px',
    },
    smcategory: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
    },
    titleStyle : {
      margin: '10px 10px',
      padding: '0px 10px',
      fontSize: '30px',
      marginBottom: '26px',
      fontWeight: 'bold',
    },
    textarea: {
      margin: '10px 10px',
      padding: '0px 10px',
      fontSize: '15px',
      overflow: 'hidden',
      width: '400px',
      height: '100px',
      marginBottom: '26px',
      fontWeight: 'bold',
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
    date:{
      margin: '10px 10px',
      padding: '0px 10px',
      overflow: 'hidden',
      marginBottom: '26px',
      fontWeight: 'bold',
    },
    box: {
      margin: '10px 10px',
      padding: '0px 10px',
      overflow: 'hidden',
      marginBottom: '26px',
      fontWeight: 'bold',
    },

  })
)
