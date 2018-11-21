import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import Avatar from '@material-ui/core/Avatar';

import styles from './VisibilityChip.module.css';

const propTypes = {
  isGroup: PropTypes.bool,
};

const defaultProps = {
  isGroup: false,
};

class VisibilityChip extends React.PureComponent {
  renderLabel() {
    const { isGroup } = this.props;

    return (
      <React.Fragment>
        {isGroup && (
          <Avatar className={`${styles.avatar} ${styles.groupAvatar}`}>
            <GroupOutlinedIcon />
          </Avatar>
        )}
        <span className={styles.counter}>(+3)</span>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Chip
        className={styles.root}
        avatar={
          <Avatar className={styles.lockAvatar}>
            <LockOutlinedIcon />
          </Avatar>
        }
        label={this.renderLabel()}
        clickable={false}
      />

    );
  }
}

VisibilityChip.propTypes = propTypes;
VisibilityChip.defaultProps = defaultProps;

export default VisibilityChip;
