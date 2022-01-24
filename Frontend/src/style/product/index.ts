import { createStyles, makeStyles } from '@material-ui/core'

export const productStyle = makeStyles(() =>
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
    filter: {
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      height: '37px',
      border: '1px solid #545458',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    color: {
      width: '',
    },

    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 257px)',
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
    two: {
      padding: '0px 15px',
      fontSize: '12px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },

    login: {
      color: '#E9BD15',
      textDecoration: 'none',
      border: '1px solid #E9BD15',
      fontSize: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: '4px 13px',
      borderRadius: '20px',
      transition: 'all ease-in 0.1s',
      '&:hover': {
        backgroundColor: '#E9BD15',
        color: '#ffffff',
      },
    },

    colorWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 24px)',
      backgroundColor: '#ffffff',
      gap: '4px',
      padding: '4px',
      position: 'absolute',
      marginLeft: '90px',
    },
    colorItem: {
      width: '24px',
      height: '24px',
      border: '1px solid #ccc',
      cursor: 'pointer',
      '&:hover': {
        '&>div': {
          display: 'block',
        },
      },
    },
    tooltip: {
      position: 'absolute',
      fontSize: '10px',
      marginLeft: '30px',
      marginTop: '25px',
      display: 'none',
      backgroundColor: '#262626',
      padding: '4px 8px',
      whiteSpace: 'nowrap',
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
    },
    article: {
      height: '60px',
    },

    imageUpload: {
      height: '100px',
      width: '500px',
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
      top: 'calc(50% - 150px)',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '18px',
      '&>img': {
        width: '300px',
        height: '300px',
        marginBottom: '15px',
      },
    },
  })
)
