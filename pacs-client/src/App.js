import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {makeStyles, withStyles} from '@material-ui/core';
import PatientList from './PatientList';
import StudiesList from './StudiesList';
import SeriesList from './SeriesList';

import config from './config';

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPatient: null,
      selectedStudy: null,
      selectedSeries: null,
    };
    this.onPatientSelected = this.onPatientSelected.bind(this);
    this.onStudySelected = this.onStudySelected.bind(this);
    this.onSeriesSelected = this.onSeriesSelected.bind(this);
  }

  onPatientSelected(patient) {
    this.setState({
      selectedPatient: patient,
      selectedStudy: null,
      selectedSeries: null,
    })
  }

  onStudySelected(study) {
    this.setState({
      selectedStudy: study,
      selectedSeries: null,
    })
  }

  onSeriesSelected(series) {
    this.setState({
      selectedSeries: series,
    })
  }

  renderBrowser() {
    const classes = this.props.classes;
    return <Grid
      container
      direction="row"
      className="mainContainer"
    >
      <Grid item xs={ 12 } sm={ 4 }>
        <Paper className={ classes.paper }>
          <PatientList onItemSelected={this.onPatientSelected}/>
        </Paper>
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Paper className={ classes.paper }>
          <StudiesList onItemSelected={this.onStudySelected} patient={this.state.selectedPatient}/>
        </Paper>
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Paper className={ classes.paper }>
          <SeriesList onItemSelected={this.onSeriesSelected} study={this.state.selectedStudy}/>
        </Paper>
      </Grid>
    </Grid>;
  }

  renderSeriesViewer() {
    return <iframe style={{ width: '100%', height: '100%' }}
                   src={`${config.apiUrl}/osimis-viewer/app/index.html?series=${this.state.selectedSeries.ID}`}/>
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className="App">
        <AppBar position={ 'static' }>
          <Toolbar>
            <Typography variant="h6">
              Orthanc Simple Client
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        { this.state.selectedSeries ? this.renderSeriesViewer() : this.renderBrowser() }
      </div>
    );
  }
}

export default withStyles(styles)(App);
