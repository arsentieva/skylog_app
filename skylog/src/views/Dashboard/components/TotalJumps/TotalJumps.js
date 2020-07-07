import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ScoreIcon from '@material-ui/icons/Score';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    background:  'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
}));

const TotalJumps = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardContent>
        <Grid container justify="space-between" >
          <Grid item>
            <Typography  className={classes.title} color="inherit" gutterBottom  variant="body1" >TOTAL JUMPS </Typography>
            <Typography color="inherit" variant="h1" > 798 </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ScoreIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalJumps.propTypes = {
  className: PropTypes.string
};

export default TotalJumps;
