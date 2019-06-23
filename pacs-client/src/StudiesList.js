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


export default class StudiesList extends React.Component {

  constructor(props) {
    super(props);

    this.renderStudy = this.renderStudy.bind(this);

    this.state = {
      isLoaded: false,
      studies: [],
      loadedPatientID: null,
    }
  }

  renderStudy(study, ndx) {
    return <ListItemLink key={ndx} href="#" onClick={() => this.itemClicked(study)} >
      <ListItemText primary={study.MainDicomTags.StudyID || "(unknown)"} secondary={`id:${study.ID}`} />
    </ListItemLink>
  }

  itemClicked(study) {
    if (typeof this.props.onItemSelected === 'function') {
      this.props.onItemSelected(study);
    }
  }

  componentDidMount() {
    this.updateStudies();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateStudies();
  }

  updateStudies() {
    if (!this.props.patient || this.props.patient.ID === this.state.loadedPatientID) {
      return;
    }
    fetch(`${config.apiUrl}/patients/${this.props.patient.ID}/studies?expand`, { headers: config.authHeader })
      .then((response) => {
        return response.json();
      })
      .then((studies) => {
        this.setState({ studies, loadedPatientID: this.props.patient.ID })
      })
      .catch(alert);
  }

  render() {
    const { studies } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="subtitle1" color="inherit">
              Studies
            </Typography>
          </Toolbar>
        </AppBar>
        { this.props.patient ? <List>{studies.map(this.renderStudy)}</List>: <Typography variant={'subtitle2'}>No patient selected</Typography>}
      </div>
    );
  }
}
