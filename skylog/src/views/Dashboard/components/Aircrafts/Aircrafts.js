import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Divider } from '@material-ui/core';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  airplane: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center'
  },
  airplaneIcon: {
    color: theme.palette.error.dark
  },
  divider: {
    marginBottom: theme.spacing(1),
  }
}));

const Aircrafts = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between" >
          <Grid item>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2"> AIRCRAFTS</Typography>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
        <div className={classes.airplane}>
          <AirplanemodeActiveIcon className={classes.airplaneIcon} />
          <Typography variant="h1">15</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

Aircrafts.propTypes = {
  className: PropTypes.string
};

export default Aircrafts;
