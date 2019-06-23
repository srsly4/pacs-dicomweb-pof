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


export default class SeriesList extends React.Component {

  constructor(props) {
    super(props);

    this.renderSeries = this.renderSeries.bind(this);

    this.state = {
      isLoaded: false,
      series: [],
      loadedStudyID: null,
    }
  }

  renderSeries(study, ndx) {
    return <ListItemLink key={ndx} href="#" onClick={() => this.itemClicked(study)} >
      <ListItemText primary={study.MainDicomTags.SeriesNumber || "(unknown)"} secondary={`id:${study.ID}`} />
    </ListItemLink>
  }

  itemClicked(series) {
    if (typeof this.props.onItemSelected === 'function') {
      this.props.onItemSelected(series);
    }
  }

  componentDidMount() {
    this.updateStudies();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateStudies();
  }

  updateStudies() {
    if (!this.props.study || this.props.study.ID === this.state.loadedStudyID) {
      return;
    }
    fetch(`${config.apiUrl}/studies/${this.props.study.ID}/series?expand`, { headers: config.authHeader })
      .then((response) => {
        return response.json();
      })
      .then((series) => {
        this.setState({ series, loadedStudyID: this.props.study.ID })
      })
      .catch(alert);
  }

  render() {
    const { series } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="subtitle1" color="inherit">
              Series
            </Typography>
          </Toolbar>
        </AppBar>
        { this.props.study ? <List>{series.map(this.renderSeries)}</List> : <Typography variant={'subtitle2'}>No study selected</Typography>}
      </div>
    );
  }
}
