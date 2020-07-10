import React from 'react';
import GaugeChart from 'react-gauge-chart'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {  Card,  CardHeader,  CardContent,  Typography, Divider} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    position: 'relative',
    height: '200px'
  },
  title: {
    fontWeight: 700,
    marginLeft: theme.spacing(19),
    marginTop: theme.spacing(2),
  },
}));

const JumpsGauge = props => {
  const { className, ...rest } = props;
   const classes = useStyles();

   return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardHeader title="SPEED" />
      <Divider />
      <CardContent>
      <div className={classes.chartContainer}>
        <GaugeChart id="gauge-chart"  nrOfLevels={40} colors={["#0196F3", " #21CBb0"]} arcWidth={0.35}
           percent={0.37} textColor="#00F00"  formatTextValue={value=>value+"km"} needleColor="#21CBF3" needleBaseColor="#2176F3" />
        <Typography  className={classes.title}  variant="h5" > Average freefall speed </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

JumpsGauge.propTypes = {
  className: PropTypes.string
};

export default JumpsGauge;
