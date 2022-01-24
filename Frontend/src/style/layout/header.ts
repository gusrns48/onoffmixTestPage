import { createStyles, makeStyles } from '@material-ui/core'

export const headerStyle = makeStyles(() =>
  createStyles({
    header: {
      width: '100%',
      padding: '20px 0px',
      color: '#ffffff',
      borderBottom: '1px solid #545458',
      height: '100px',
    },
    container: {
      maxWidth: '1285px',
      margin: '0 auto',
    },

    top: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
    },
    title: {
      cursor: 'pointer',
      fontSize: '36px',
      fontWeight: 'bold',
      width: '214px',
      textAlign: 'left',
    },
    search: {
      border: '2px solid #fff',
      display: 'flex',
      alignItems: 'center',
      width: '480px',
      padding: '6px 10px',
      borderRadius: '4px',
      '&>svg': {
        color: '#EDEDED',
      },
    },

    etc: {
      textDecoration: 'none',
      display: 'flex',
      gap: '20px',
    },
    input: {
      backgroundColor: 'inherit',
      border: 'none',
      outline: 'none',
      color: '#ffffff',
    },

    favorite: {
      marginRight: '4px',
      cursor: 'pointer',
    },

    shoppingCart: {
      cursor: 'pointer',
    },

    notification: {
      cursor: 'pointer',
    },

    login: {
      color: '#ff2477',
      border: '1px solid #ff2477',
      fontSize: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: '4px 20px',
      borderRadius: '4px',
      transition: 'all ease-in 0.1s',
      '&:hover': {
        backgroundColor: '#ff2477',
        color: '#ffffff',
      },
    },

    bottom: {
      display: 'flex',
      justifyContent: 'flex-start',
      fontWeight: 600,
      fontSize: '13px',
      '&>a': {
        color: '#EDEDED',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          color: '#ff2477',
        },
      },
    },
  })
)
