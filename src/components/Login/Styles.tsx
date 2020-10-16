/*
 * スタイル定義
 * ログインページ
 */
import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const pageStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginBackGround: {
      ackground: ' no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundBlendMode: 'lighten',
      backgroundColor: 'rgba(255,255,255,0.9)',
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      '&:before': {
        content: '""',
        background: 'inherit',
        filter: 'blur(3px)',
        backgroundColor: 'rgba(255,255,255,0.9)',
        position: 'absolute',
        top: '-5px',
        left: '-5px',
        right: '-5px',
        bottom: '-5px',
        zIndex: -1,
      },
    },
    formWrap: {
      backgroundColor: 'white',
    },
    formInner: {
      height: '100vh',
    },
    logo: {
      width: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up('lg')]: {
        width: '170px',
      },
      marginBottom: theme.spacing(20),
      '& img': {
        width: '100%',
        display: 'block',
      },
    },
    errorMessageBox: {
      border: `2px solid ${theme.palette.error.main}`,
      borderRadius: '5px',
      boxShadow: '0 0 0 4px #fcf4f4 inset',
      backgroundColor: 'rgba(255, 255, 255, 0.80)',
      padding: theme.spacing(4),
      marginBottom: theme.spacing(8),
    },
    errorMessage: {
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.error.main,
    },
    inputEmail: {
      marginBottom: theme.spacing(5),
      '& label': {
        fontSize: '1rem',
      },
      '& input': {
        fontSize: '16px',
      },
      '& input:-webkit-autofill': {
        webkitTransition: 'background-color 9999s',
        transition: 'background-color 9999s',
      },
    },
    inputEcOrderNo: {
      marginBottom: theme.spacing(8),
      '& label': {
        fontSize: '1rem',
      },
      '& input': {
        fontSize: '16px',
      },
    },
  }),
);
