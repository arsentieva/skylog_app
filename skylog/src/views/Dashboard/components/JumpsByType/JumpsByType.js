import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {  Card,  CardHeader,  CardContent,  IconButton,  Divider,  Typography} from '@material-ui/core';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import RefreshIcon from '@material-ui/icons/Refresh';
import LandscapeIcon from '@material-ui/icons/Landscape';

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

const JumpsByType = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          theme.palette.success.light,
          theme.palette.info.main,
          theme.palette.warning.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Wingsuit ', 'Tablet', 'Mobile']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const types = [
    {
      title: 'Wingsuit',
      value: '63',
      icon: <EmojiPeopleIcon />,
      color: theme.palette.success.light
    },
    {
      title: 'Relative Work',
      value: '15',
      icon: <LandscapeIcon />,
      color: theme.palette.info.main
    },
    {
      title: 'Freeflying',
      value: '23',
      icon: <AccessibilityIcon />,
      color: theme.palette.warning.main
    }
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <CardHeader action={<IconButton size="small"> <RefreshIcon /> </IconButton> } title="Jumps By Type" />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
        <Doughnut data={data}  options={options} />
        </div>
        <div className={classes.stats}>
            {types.map(jumpType => (
            <div className={classes.jumpType} key={jumpType.title} >
              <span className={classes.jumpTypeIcon}>{jumpType.icon}</span>
              <Typography variant="body1">{jumpType.title}</Typography>
              <Typography style={{ color: jumpType.color }} variant="h2" > {jumpType.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

JumpsByType.propTypes = {
  className: PropTypes.string
};

export default JumpsByType;
