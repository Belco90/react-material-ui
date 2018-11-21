import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import VisibilityChip from '../VisibilityChip';

import styles from './EntityResultSection.module.css';

const userPropTypes = PropTypes.shape({
  id: PropTypes.string,
  fullName: PropTypes.string,
  profilePicture: PropTypes.string,
});

const slotPropTypes = PropTypes.shape({
  id: PropTypes.string,
  shared: PropTypes.bool,
  visibility: PropTypes.object,
  owner: userPropTypes,
  creationDate: PropTypes.string,
  description: PropTypes.string,
});

const propTypes = {
  entity: PropTypes.arrayOf(slotPropTypes).isRequired,
};

class EntityResultSection extends Component {
  static renderCreationDate(datetime) {
    const [date, time] = datetime.split(' ');
    return (
      <Typography variant="subtitle1" className={styles.creationDate}>
        {date}
        <br />
        <span className={styles.time}>{time}</span>
      </Typography>
    );
  }

  handleOpenClick = id => {
    alert(`Open button clicked for ${id}`);
  };

  handleVisibilityClick = () => {
    alert('Visibility button clicked');
  };

  renderVisibilityButton(options) {
    return (
      <span className={styles.visibilityButtonWrapper}>
        <IconButton onClick={this.handleVisibilityClick} className={styles.visibilityButton}>
          {options.editable ? (
            <CreateOutlinedIcon />
          ) : (
            <VisibilityOutlinedIcon />
          )}
        </IconButton>
      </span>
    );
  }

  render() {
    const { entity } = this.props;

    return (
      <React.Fragment>
        <TableHead>
          <TableRow>
            <TableCell>Visibility/Shared</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Creation date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {entity.map(slot => (
            <TableRow key={slot.id}>
              <TableCell>
                <VisibilityChip isGroup={slot.visibility.group} />
                {this.renderVisibilityButton(slot.visibility)}
              </TableCell>
              <TableCell>
                <Avatar
                  className={styles.avatar}
                  src={slot.owner.profilePicture}
                  alt={slot.owner.fullName}
                />
              </TableCell>
              <TableCell>
                {EntityResultSection.renderCreationDate(slot.creationDate)}
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{slot.description}</Typography>
              </TableCell>
              <TableCell className="text-right">
                <Button onClick={() => this.handleOpenClick(slot.id)}>
                  Open
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </React.Fragment>
    );
  }
}

EntityResultSection.propTypes = propTypes;

export default EntityResultSection;
