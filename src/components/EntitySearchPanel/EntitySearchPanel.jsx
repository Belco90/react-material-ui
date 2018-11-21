import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import EntityResultSection from '../EntityResultSection';
import api from '../../api';

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
    results: null,
  };

  componentDidMount() {
    this.fetchResults();
  }

  fetchResults() {
    this.setState({ isLoading: true, results: null });

    api.readEntities().then(results => {
      this.setState({ isLoading: false, results });
    });
  }

  handleDetailsClick = () => {
    alert('Details button clicked');
  };

  handleAddClick = () => {
    alert('Add button clicked');
  };

  handleStartNewClick = () => {
    this.fetchResults();
  };

  render() {
    const { isLoading, results } = this.state;

    if (isLoading) {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <CircularProgress color="secondary" size={70} />
        </Grid>
      );
    }

    if (!results) {
      return 'No results found';
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
                <Button onClick={this.handleAddClick}>Add</Button>
                <Button color="primary" onClick={this.handleStartNewClick}>
                  Start new
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>

          {results && results.map((result, idx) => (
            <React.Fragment key={idx}>
              {tableDivider}
              <EntityResultSection entity={result} />
            </React.Fragment>
          ))}

          {!results && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={MAX_CELLS}>
                  <Typography variant="h6">No results found</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}

          <TableFooter>
            <TableRow>
              <TableCell colSpan={MAX_CELLS} className={styles.footerButtonGroup}>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={this.handleDetailsClick}
                >
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
