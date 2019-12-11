import React from 'react';
import { Router } from 'react-router-dom';

//? Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import theme from './theme';
import { createBrowserHistory } from 'history';

import './App.css';
import Routes from './Routes';

const history = createBrowserHistory();
const themeFile = createMuiTheme(theme);

function App() {
  return (
    <MuiThemeProvider theme={themeFile}>
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
