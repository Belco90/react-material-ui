import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBar from './components/MainBar';
import MainPanel from './components/MainPanel';

import styles from './App.module.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#394eff' },
    secondary: { main: '#666666' },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <MainBar />
    <Grid
      container
      spacing={12}
      justify="center"
      alignItems="center"
      className={styles.mainGrid}
    >
      <Grid item xs={12} sm={10}>
        <MainPanel />
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default App;
