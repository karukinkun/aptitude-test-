/**
 * ログインページ
 *************************************************/
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { FormControl, InputLabel, Grid, Input } from '@material-ui/core';
import { pageStyles } from 'components/Login/Styles';
import ActionButton from 'components/common/ActionButton';

const LoginPage: FC<{}> = () => {
  const history = useHistory();
  const pageClass = pageStyles();

  return (
    <form noValidate>
      <Grid container justify="center" alignItems="center" className={pageClass.formInner}>
        <Grid item xs={9} lg={2}>
          <Box className={pageClass.inputEmail}>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">メールアドレス</InputLabel>
              <Input
                name="email"
                id="email"
                type="email"
                inputMode="email"
                autoComplete="off"
                autoFocus
                aria-describedby="emailNoHelperText"
              />
            </FormControl>
          </Box>
          <Box className={pageClass.inputEcOrderNo}>
            <FormControl fullWidth>
              <InputLabel htmlFor="ecOrderNo">ご注文番号</InputLabel>
              <Input name="ecOrderNo" id="ecOrderNo" type="tel" autoComplete="off" />
            </FormControl>
          </Box>
          <Box>
            <ActionButton type="submit" fullWidth color="primary" data-cy="login-button">
              ログイン
            </ActionButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginPage;
