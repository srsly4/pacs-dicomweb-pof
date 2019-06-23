import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import fetch from 'isomorphic-fetch';


import config from './config';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


export default class PatientList extends React.Component {

  constructor(props) {
    super(props);

    this.renderPatient = this.renderPatient.bind(this);

    this.state = {
      isLoaded: false,
      patients: [],
    }
  }

  renderPatient(patient, ndx) {
    return <ListItemLink key={ndx} href="#" onClick={() => this.itemClicked(patient)} >
      <ListItemText primary={patient.MainDicomTags.PatientName || "(unknown)"} secondary={`id:${patient.ID}`} />
    </ListItemLink>
  }

  itemClicked(patient) {
    if (typeof this.props.onItemSelected === 'function') {
      this.props.onItemSelected(patient);
    }
  }

  componentDidMount() {
    fetch(`${config.apiUrl}/patients?expand`, { headers: config.authHeader })
      .then((response) => {
        return response.json();
      })
      .then((patients) => {
        this.setState({ patients })
      })
      .catch(alert);
  }

  render() {
    const { patients } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="subtitle1" color="inherit">
              Patients
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          { patients.map(this.renderPatient) }
        </List>
      </div>
    );
  }
}
