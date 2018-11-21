import React from 'react';
import Chip from '@material-ui/core/Chip';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

import styles from './VisibilityChip.module.css';

class VisibilityChip extends React.PureComponent {
  renderLabel() {
    return '(+3)'
  }

  render() {
    return (
      <Chip
        className={styles.root}
        avatar={
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        }
        label={this.renderLabel()}
        clickable={false}
      />

    );
  }
}

export default VisibilityChip;
