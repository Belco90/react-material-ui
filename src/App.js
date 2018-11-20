import React  from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MainBar from './components/MainBar';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#394eff' },
    secondary: { main: '#666666' },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <MainBar />
  </MuiThemeProvider>
);

export default App;
