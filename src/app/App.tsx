import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Backdrop, CircularProgress, createStyles, makeStyles, MuiThemeProvider, Theme } from '@material-ui/core';
import { currentTheme } from 'components/common/Theme';
import LoginPage from 'components/Login/LoginPage';
import ExamplePage from 'components/Example/ExamplePage';
import QuestionPage from 'components/Question/QuestionPage';
import { useSelector } from 'react-redux';
import { blue } from '@material-ui/core/colors';
import { RootState } from './rootReducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 9999,
      backgroundColor: theme.palette.common.white,
      color: blue[300],
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const { isLoading } = useSelector((state: RootState) => state.common);

  return (
    <>
      <MuiThemeProvider theme={currentTheme()}>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
        <Backdrop className={classes.backdrop} open={isLoading} data-cy="loading">
          <CircularProgress color="inherit" />
        </Backdrop>
      </MuiThemeProvider>
    </>
  );
};

export default App;
