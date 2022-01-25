import { createStyles, makeStyles } from '@material-ui/core'

export const mainclassStyle = makeStyles(() =>
  createStyles({
    product: {
      maxWidth: '1285px',
      margin: '0 auto',
      color: '#ffffff',
      textAlign: 'left',
      padding: '30px 0px',
      minHeight: 'calc(100% - 314px)',
    },
    bigname: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '25px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
    },
    title: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
    },
    contents: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
    },
    maxover: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      color: '#cc0000',
    },
    myclass: {
      margin: '10px 0px',
      padding: '0px 10px',
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      color: '#00a000',
    },
    button: {
      marginBottom: '20px',
      '&>button': {
        width: '120px',
        height: '30px',
        backgroundColor: '#3B434D',
        color: '#ffffff',
        border: 'none',
        outline: 'none',
        fontSize: '14px',
        cursor: 'pointer',
        borderRadius: '3px',
        transition: 'ease-in 0.2s background-color',
        '&:hover': {
          backgroundColor: '#4d5663',
        },
      },
    },

    login: {
      color: '#E9BD15',
      textDecoration: 'none',
      border: '1px solid #E9BD15',
      cursor: 'pointer',
      alignItems: 'center',
      padding: '4px 13px',
      borderRadius: '20px',
      transition: 'all ease-in 0.1s',
      '&:hover': {
        backgroundColor: '#E9BD15',
        color: '#ffffff',
      },
    },
  })
)
