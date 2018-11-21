import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EntityResultSection from '../EntityResultSection';
import { fakeResults } from '../../fixtures';

import styles from './EntitySearchPanel.module.css';

const MAX_CELLS = 5;

const tableDivider = (
  <TableBody>
    <TableRow className={styles.slim}>
      <TableCell colSpan={MAX_CELLS} />
    </TableRow>
  </TableBody>
);

class EntitySearchPanel extends React.Component {

  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return 'Loading...';
    }

    return (
      <Paper className={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={MAX_CELLS}>Entity search results</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>IP Results for 1.1.1.1</TableCell>
              <TableCell colSpan={MAX_CELLS - 1} className="text-right">
                <Button>Add</Button>
                <Button color="primary">Start new</Button>
              </TableCell>
            </TableRow>
          </TableBody>

          {fakeResults.map((result, idx) => (
            <React.Fragment key={idx}>
              {tableDivider}
              <EntityResultSection entity={result} />
            </React.Fragment>
          ))}

          <TableFooter>
            <TableRow>
              <TableCell colSpan={MAX_CELLS} className={styles.footerButtonGroup}>
                <Button color="primary" variant="contained" size="large">
                  View Graph Search details
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

export default EntitySearchPanel;
