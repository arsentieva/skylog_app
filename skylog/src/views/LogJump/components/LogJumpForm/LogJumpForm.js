import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Divider, Grid, Button, Select, MenuItem,TextField, FormControl, InputLabel,Typography, Slider} from '@material-ui/core';

import DateTimePicker from './DateTimePicker';

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    marginLeft: theme.spacing(1),
    minWidth: 100,
  },
  dateTime: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
  }
}));

const LogJumpForm = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
      id: 18,
      title: "Chelan Formation",
      exit: 6500,
      open: 4200,
      freefall: "36s",
      jumpDate: 1555016400000,
      type: "freestyle",
      aircraft:"cessna",
      location: "Chelan",
      wind: "10",
      equipment: "icarus",
      velocity: "300",
      notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      signature: "AA Lic145",

  });

  const handleChange = event => {
    setValues({...values,[event.target.name]: event.target.value });
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)} >
      <form autoComplete="off" noValidate >
        <CardHeader subheader="The information can be edited" title="Log Jump" />
        <Divider />
        <CardContent>
          <Grid container spacing={2} >
            <Grid item  md={2} xs={2}>
              <TextField fullWidth label="Jump Number" margin="dense" name="number" onChange={handleChange} required value={values.id} variant="outlined"/>
            </Grid>
            <Grid item md={7} xs={12}>
              <TextField fullWidth label="Name your jump" margin="dense" name="title" onChange={handleChange} required value={values.title} variant="outlined" />
            </Grid>
            <Grid item md={1} xs={6} >
              <FormControl className={classes.formControl}>
                <InputLabel>Select Type</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.type} onChange={handleChange} autoWidth >
                  <MenuItem value=""><em>Select Type</em></MenuItem>
                  <MenuItem value={"freestyle"}>Freestyle</MenuItem>
                  {/* <MenuItem value={20}>Windsuit</MenuItem>
                  <MenuItem value={30}>other</MenuItem> */}
                </Select>

              </FormControl>
            </Grid>
            <Grid item md={1} xs={2}>
              <TextField fullWidth label="Freefall Time" margin="dense" name="title" onChange={handleChange} required value={values.freefall} variant="outlined" />
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography id="vertical-slider" gutterBottom> Exit(ft)</Typography>
              <Slider defaultValue={6000} step={250} marks min={2500} max={16000} valueLabelDisplay="on" name="exit" onChange={handleChange} required value={values.exit}/>
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography id="vertical-slider" gutterBottom> Open(ft) </Typography>
              <Slider defaultValue={4500} step={250} marks min={2000} max={16000} valueLabelDisplay="on" name="open" onChange={handleChange} required value={values.open}/>
            </Grid>
            <Grid item md={4} xs={6} >
              <Typography id="vertical-slider" gutterBottom> Wind(mile/h) </Typography>
              <Slider defaultValue={10}   step={1} marks min={1} max={25} valueLabelDisplay="on" name="wind" onChange={handleChange}  required value={values.wind}/>
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField fullWidth label="Aircraft" margin="dense" name="aircraft" onChange={handleChange}  required value={values.aircraft} variant="outlined"/>
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField fullWidth label="Location" margin="dense" name="location" onChange={handleChange}  required value={values.location} variant="outlined"/>
            </Grid>
            <Grid item md={3} xs={3} >
              <TextField fullWidth label="Equipment" margin="dense" name="equipment" onChange={handleChange}  required value={values.equipment} variant="outlined"/>
            </Grid>
            <Grid item md={3} xs={3} >
              <TextField fullWidth label="Velocity" margin="dense" name="velocity" onChange={handleChange}  required value={values.velocity} variant="outlined"/>
            </Grid>
            <Grid item md={6} xs={12} >
              <div className={classes.dateTime}>
                <DateTimePicker />
              </div>
            </Grid>
            <Grid item md={12} xs={12} >
              <TextField fullWidth label="Notes" margin="dense" name="notes" onChange={handleChange}  required value={values.notes} variant="outlined"/>
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField fullWidth label="Signature" margin="dense" name="signature" onChange={handleChange}  required value={values.signature} variant="outlined"/>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">Save </Button>
        </CardActions>
      </form>
    </Card>
  );
};

LogJumpForm.propTypes = {
  className: PropTypes.string
};

export default LogJumpForm;
