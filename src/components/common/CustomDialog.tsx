import React, { FC, useState, useCallback, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
  createStyles,
  Box,
  Theme,
} from '@material-ui/core';
import ActionButton from 'components/common/ActionButton';

type OpenDialogParams = {
  title: string;
  content: string | JSX.Element;
  buttonTitle?: string;
  action?: () => Promise<void> | void;
  closeAction?: () => void | Promise<void>;
};

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogParams, setDialogParams] = useState<OpenDialogParams>({
    title: '',
    content: '',
  });
  const openDialog = useCallback((params: OpenDialogParams) => {
    setDialogParams(params);
    setIsOpen(true);
  }, []);

  const dialogProps: CustomDialogProps = {
    isOpen,
    setIsOpen,
    ...dialogParams,
  };

  return { openDialog, dialogProps };
};

export const useMsgDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogParams, setDialogParams] = useState<OpenDialogParams>({
    title: '',
    content: '',
  });
  const openMsgDialog = useCallback((params: OpenDialogParams) => {
    setDialogParams(params);
    setIsOpen(true);
  }, []);

  const msgDialogProps: CustomDialogProps = {
    isOpen,
    setIsOpen,
    ...dialogParams,
  };

  return { openMsgDialog, msgDialogProps };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogTitlet: {
      fontSize: theme.typography.h2.fontSize,
      fontWeight: 600,
    },
    dialogText: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: 600,
    },
  }),
);

export interface CustomDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  content: string | JSX.Element;
  buttonTitle?: string;
  action?: () => void | Promise<void>;
  closeAction?: () => void | Promise<void>;
}

const CustomDialog: FC<CustomDialogProps> = ({
  isOpen,
  setIsOpen,
  title,
  content,
  buttonTitle,
  action,
  closeAction,
}) => {
  const classes = useStyles();
  const wasCleanuped = useRef(false);

  useEffect(() => {
    return () => {
      wasCleanuped.current = true;
    };
  }, []);

  /**
   * 処理を実行
   */
  const executeAction = useCallback(async () => {
    if (action) {
      await action();
    }
    if (!wasCleanuped.current) {
      setIsOpen(false);
    }
  }, [action, setIsOpen]);

  /**
   * ダイアログを閉じる
   */
  const closeDialog = useCallback(async () => {
    if (closeAction) {
      await closeAction();
    }
    if (!wasCleanuped.current) {
      setIsOpen(false);
    }
  }, [closeAction, setIsOpen]);

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      maxWidth="sm"
      fullWidth
      data-cy="dialog"
    >
      <DialogTitle id="dialog-title">
        <Box component="span" className={classes.dialogTitlet} data-cy="dialog-title">
          {title}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          <Box component="span" className={classes.dialogText} data-cy="dialog-content">
            {content}
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {action ? (
          <>
            <ActionButton onClick={executeAction} color="primary" size="small" data-cy="dialog-action-button">
              {buttonTitle}
            </ActionButton>
            <ActionButton onClick={closeDialog} autoFocus size="small" data-cy="dialog-close-button">
              キャンセル
            </ActionButton>
          </>
        ) : (
          <>
            <ActionButton onClick={closeDialog} autoFocus size="small" data-cy="dialog-close-button">
              閉じる
            </ActionButton>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default CustomDialog;
