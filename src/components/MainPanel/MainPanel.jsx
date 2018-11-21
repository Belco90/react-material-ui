import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import styles from './MainPanel.module.css';

const MAX_CELLS = 5;

class MainPanel extends React.Component {
  renderDivider() {
    return (
      <TableRow className={styles.slim}>
        <TableCell colSpan={MAX_CELLS} />
      </TableRow>
    );
  }

  render() {
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
              <TableCell colSpan={MAX_CELLS - 1} className={styles.textRight}>
                <Button>Add</Button>
                <Button color="primary">Start new</Button>
              </TableCell>
            </TableRow>
          </TableBody>

          {this.renderDivider()}

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
            <TableRow>
              <TableCell>Visibility/Shared</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Creation date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell className={styles.textRight}>
                <Button>Open</Button>
              </TableCell>
            </TableRow>
          </TableBody>

          {this.renderDivider()}

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
            <TableRow>
              <TableCell>Visibility/Shared</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Creation date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell className={styles.textRight}>
                <Button>Open</Button>
              </TableCell>
            </TableRow>
          </TableBody>

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

export default MainPanel;
