import React from 'react';
import clsx from 'clsx';
import GaugeChart from 'react-gauge-chart'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography, Divider} from '@material-ui/core';

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
    marginLeft: theme.spacing(15),
    marginTop: theme.spacing(2),
  },

}));

const SkydiveLevels = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
    <CardHeader title="JUMP LEVELS" />
    <Divider />
      <CardContent>
        <GaugeChart id="gauge-chart2"  nrOfLevels={0} arcsLength={[0.05, 0.15, 0.25, 0.5]} arcPadding={0.01} colors={["#00ffff","#2176F3" ]} arcWidth={0.2}
           percent={0.2} textColor="#00F00"  formatTextValue={value=>value*100+" jumps"} />
            <Typography className={classes.title} variant="h5" gutterBottom > 135 jumps until next milestone</Typography>
      </CardContent>
    </Card>
  );
};

SkydiveLevels.propTypes = {
  className: PropTypes.string
};

export default SkydiveLevels;
