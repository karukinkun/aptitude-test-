/**
 * ログインページ
 *************************************************/
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { FormControl, InputLabel, Grid, Input, createStyles, makeStyles } from '@material-ui/core';
import ActionButton from 'components/common/ActionButton';
import { useDispatch } from 'react-redux';
import { startLoading, endLoading } from 'modules/commonModule';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() =>
  createStyles({
    rootGrid: {
      height: '100vh',
    },
  }),
);

type FormData = {
  email: string;
  password: string;
};
const LoginPage: FC<{}> = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /**
   * ログイン処理
   */
  const onSubmit = handleSubmit(async () => {
    try {
      dispatch(startLoading());

      // 例題1ページへ遷移
      history.push('/examplepage', {
        categoryId: '1',
      });
    } catch (e) {
    } finally {
      dispatch(endLoading());
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <Grid container justify="center" alignItems="center" className={classes.rootGrid}>
        <Grid item xs={10} md={4} lg={2}>
          <Box mb={5}>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">メールアドレス</InputLabel>
              <Input name="email" id="email" type="email" inputMode="email" autoComplete="off" autoFocus />
            </FormControl>
          </Box>
          <Box mb={10}>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">パスワード</InputLabel>
              <Input name="password" id="password" autoComplete="off" />
            </FormControl>
          </Box>
          <Box>
            <ActionButton type="submit" fullWidth color="primary">
              ログイン
            </ActionButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginPage;
