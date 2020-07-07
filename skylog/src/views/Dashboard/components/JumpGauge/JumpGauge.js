import React from 'react';
import GaugeChart from 'react-gauge-chart'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {  Card,  CardHeader,  CardContent,  IconButton,  Divider} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  jumpType: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  jumpTypeIcon: {
    color: theme.palette.icon
  }
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
        <GaugeChart id="gauge-chart" nrOfLevels={40} percent={0.8}/>
        </div>

      </CardContent>
    </Card>
  );
};

JumpsGauge.propTypes = {
  className: PropTypes.string
};

export default JumpsGauge;
