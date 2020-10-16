import React, { useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { createStyles } from '@material-ui/core';

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void | Promise<void>;
}

/**
 * スタイル定義
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      fontSize: theme.typography.h6.fontSize,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
);

const ActionButton = (props: PropsType & Omit<ButtonProps, keyof PropsType>): JSX.Element => {
  const classes = useStyles(props);
  const { ...other } = props;
  const wasCleanuped = useRef(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      wasCleanuped.current = true;
    };
  }, []);

  /**
   * ボタン連打防止処理
   */
  const onClick = useCallback(async () => {
    if (props.onClick) {
      setDisabled(true);
      await props.onClick();
      window.setTimeout(() => {
        if (!wasCleanuped.current) {
          setDisabled(false);
        }
      }, 1500);
    }
  }, [props]);

  other.fullWidth = true;
  other.variant = 'contained';

  return <Button disabled={disabled} classes={classes} {...other} onClick={onClick} />;
};

export default ActionButton;
