import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { currentTheme } from 'components/common/Theme';
import LoginPage from 'components/Login/LoginPage';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <MuiThemeProvider theme={currentTheme()}>
          <LoginPage />
        </MuiThemeProvider>
      </Route>
    </Switch>
  </>
);

export default App;
