import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { currentTheme } from 'components/common/Theme';
import TestPage from 'components/Login/TestPage';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <MuiThemeProvider theme={currentTheme()}>
          <TestPage />
        </MuiThemeProvider>
      </Route>
    </Switch>
  </>
);

export default App;
