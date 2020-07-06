import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    marginLeft: theme.spacing(17),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56,
    marginLeft: theme.spacing(17)
  },
  icon: {
    height: 32,
    width: 32,
  },
  progress: {
    marginTop: theme.spacing(5)
  }
}));

const SkydiveLevels = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardContent>
        <Grid container justify="space-between" >
          <Grid item>
            <Avatar className={classes.avatar}>
              <TrackChangesIcon className={classes.icon} />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography  className={classes.title} color="textSecondary"  gutterBottom  variant="body2" >   Skydive Levels    </Typography>
            <Typography variant="h3">135 jumps to Green Milestone </Typography>
          </Grid>
        </Grid>
        <LinearProgress className={classes.progress} value={27}  variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

SkydiveLevels.propTypes = {
  className: PropTypes.string
};

export default SkydiveLevels;
