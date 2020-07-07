import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardActions, CardHeader, CardContent, Button, Box, TablePagination, TableContainer, Divider,Typography ,Table, TableBody, TableCell, TableHead, TableRow, Tooltip, TableSortLabel, Collapse, IconButton} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  actions: {
    justifyContent: 'flex-end'
  },
  // container: {
  //   maxHeight: 440,
  // },
}));

const JumpLog = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [jumps] = useState(mockData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleShowAll=()=> {
     setRowsPerPage(jumps.length);
     setPage(0);
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardHeader action={ <Button color="primary" size="medium"  variant="outlined" > Log Jump </Button>} title="Jump Log"/>
      <Divider />
      <CardContent className={classes.content}>
          <div className={classes.inner}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip enterDelay={300} title="Sort" >
                      <TableSortLabel  active  direction="desc" > Date</TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Exit</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell>Freefall</TableCell>
                  <TableCell>Aircraft</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Wind</TableCell>
                  <TableCell>Equipment</TableCell>
                  <TableCell>Velocity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jumps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).reverse().map((jump) => (
                  <JumpRow key={jump.id} jump={jump}/>
                ))}
              </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={jumps.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button onClick={handleShowAll} color="primary" size="small" variant="text">View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};


function JumpRow (props) {
  const { jump } = props;
  const [open, setOpen] = useState(false);

return (
        <>
          <TableRow hover key={jump.id}>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell>{jump.id}</TableCell>
            <TableCell>{jump.title}</TableCell>
            <TableCell>{moment(jump.jumpDate).format('MMM Do YY, h:mm:ss a')}</TableCell>
            <TableCell>{jump.type}</TableCell>
            <TableCell>{jump.exit}</TableCell>
            <TableCell>{jump.open}</TableCell>
            <TableCell>{jump.exit - jump.open}</TableCell>
            <TableCell>{jump.aircraft}</TableCell>
            <TableCell>{jump.location}</TableCell>
            <TableCell>{jump.wind}</TableCell>
            <TableCell>{jump.equipment}</TableCell>
            <TableCell>{jump.velocity}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Notes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jump.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * jump.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
          </TableRow>
        </>
        )
}

//TODO once the data is set then JumpRow.protType shell be setup too.

JumpLog.propTypes = {
  className: PropTypes.string
};

export default JumpLog;
