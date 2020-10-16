import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const baseStyles = makeStyles((theme: Theme) =>
  createStyles({
    secTitle: {
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      fontSize: theme.typography.h3.fontSize,
      color: theme.typography.h3.color,
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.h1.fontSize,
        color: theme.typography.h1.color,
      },
    },
    secDivider: {
      marginBottom: theme.spacing(8),
      [theme.breakpoints.up('lg')]: {
        marginBottom: theme.spacing(14),
      },
    },
    button: {
      width: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonAllow: {
      position: 'absolute',
      top: '50%',
      right: '15px',
      transform: 'translateY(-50%)',
      display: 'inline-block',
      paddingLeft: '20px',
      '&::after': {
        width: '8px',
        height: '8px',
        border: '0px',
        borderTop: `solid 2px ${theme.palette.common.white}`,
        borderRight: `solid 2px ${theme.palette.common.white}`,
        transform: 'rotate(45deg)',
        position: 'absolute',
        left: 0,
        marginTop: '-4px',
        content: "''",
      },
    },
  }),
);
