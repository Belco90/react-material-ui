import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBar from './components/MainBar';
import EntitySearchPanel from './components/EntitySearchPanel';

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
      spacing={0}
      justify="center"
      alignItems="center"
      className={styles.mainGrid}
    >
      <Grid item xs={true} sm={10}>
        <EntitySearchPanel />
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default App;
