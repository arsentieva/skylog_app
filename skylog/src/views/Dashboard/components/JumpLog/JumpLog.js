import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardActions, CardHeader, CardContent, Button, Divider, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, TableSortLabel} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const JumpLog = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [jumps] = useState(mockData);

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardHeader action={ <Button color="primary" size="small"  variant="outlined" > Log Jump </Button>} title="Jump Log"/>
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Exit</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell>Freefal</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip enterDelay={300} title="Sort" >
                      <TableSortLabel  active  direction="desc" > Date</TableSortLabel>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jumps.map(jump => (
                  <TableRow hover key={jump.id}                  >
                    <TableCell>{jump.title}</TableCell>
                    <TableCell>{jump.exit}</TableCell>
                    <TableCell>{jump.open}</TableCell>
                    <TableCell>{jump.freeFall}</TableCell>
                    <TableCell>{moment(jump.jumpDate).format('DD/MM/YYYY')}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

JumpLog.propTypes = {
  className: PropTypes.string
};

export default JumpLog;
