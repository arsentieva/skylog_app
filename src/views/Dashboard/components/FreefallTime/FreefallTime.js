import React , {useContext} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from "moment";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Divider } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {SkyLogContext} from "../../../../SkyLogContext";

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
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  divider: {
    marginBottom: theme.spacing(1),
  }
}));

const FreefallTime = props => {
  const { className, ...rest } = props;
  const {jumps} = useContext(SkyLogContext);
  const classes = useStyles();

  const getFreeFallTime =()=> {
    let totalFreefallTimes = jumps.map(jump=> jump.freefallTime);
    let totalTime=0;
    if(totalFreefallTimes.length>0){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      totalTime = totalFreefallTimes.reduce(reducer);
    }

    return  moment.utc(totalTime*1000).format('HH:mm:ss');
  }

  const totalFreefallTime = getFreeFallTime();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between" >
          <Grid item>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2"> FREEFALL TIME</Typography>
            <Divider className={classes.divider} />
            <Typography variant="h3">{totalFreefallTime}</Typography>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2"> 12% </Typography>
          <Typography className={classes.caption} variant="caption" > Since last month </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

FreefallTime.propTypes = {
  className: PropTypes.string
};

export default FreefallTime;
