import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import styles from './MainBar.module.css';

const MainBar = () => (
  <div className={styles.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={styles.grow}>
          React <span>❤</span>️ Material Design
        </Typography>
        <Button color="inherit"><AccountCircle /></Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default MainBar;
