import React from 'react';
import GaugeChart from 'react-gauge-chart'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {  Card,  CardHeader,  CardContent,  IconButton,  Divider} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    position: 'relative',
    height: '200px'
  },
}));

const JumpsGauge = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
   return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardHeader action={<IconButton size="small"> <RefreshIcon /> </IconButton> } title="Jumps Speed" />
      <Divider />
      <CardContent>
      <div className={classes.chartContainer}>
        <GaugeChart id="gauge-chart"  nrOfLevels={40} colors={["#0196F3", " #21CBb0"]} arcWidth={0.35}
           percent={0.37} textColor="#00F00"  formatTextValue={value=>value+"km"} needleColor="#21CBF3" needleBaseColor="#2176F3" />
        </div>

      </CardContent>
    </Card>
  );
};

JumpsGauge.propTypes = {
  className: PropTypes.string
};

export default JumpsGauge;
