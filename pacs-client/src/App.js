import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core';
import PatientList from './PatientList';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position={'static'}>
        <Toolbar>
          <Typography variant="h6">
            Orthanc Simple Client
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="row"
        className="mainContainer"
      >
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} >
            <PatientList/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} >Test</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} >Test</Paper>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
