import { createStyles, makeStyles } from '@material-ui/core'

export const footerStyle = makeStyles(() =>
  createStyles({
    footer: {
      width: '100%',
      padding: '15px 0px',
      color: '#ffffff',
      borderTop: '1px solid #545458',
    },
    container: {
      maxWidth: '1285px',
      margin: '0 auto',
    },

    first: {
      display: 'flex',
      fontSize: '12px',
      padding: '2px 0px',
      '&>div': {
        padding: '0px 12px',
        borderRight: '1px solid #ffffff',
        cursor: 'pointer',
        '&:nth-child(1)': {
          borderLeft: '1px solid #ffffff',
        },
      },
    },
    second: {
      textAlign: 'left',
      fontSize: '12px',
      padding: '10px 0px',
    },
    third: {
      textAlign: 'left',
      fontSize: '12px',
      paddingBottom: '10px',
    },

    title: {},
  })
)
