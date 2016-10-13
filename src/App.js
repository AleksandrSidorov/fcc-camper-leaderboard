import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import CamperList from './components/CamperList';
import axios from 'axios';
import _ from 'lodash';

const BASE_URL = 'https://fcctop100.herokuapp.com/api/';
const RECENT_PATH = 'fccusers/top/recent';
const ALLTIME_PATH = 'fccusers/top/alltime';
const FCC_URL = 'https://www.freecodecamp.com/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      data: []
    };
  }

  getCampers(category) {
    return axios.get(BASE_URL + category);
  }

  getAllData() {
    axios.all([ this.getCampers(RECENT_PATH), this.getCampers(ALLTIME_PATH) ])
      .then( axios.spread( (recent, alltime) => {
        let campersUnion = _.unionBy(recent.data, alltime.data, 'username');
        console.log(campersUnion);
        this.setState({
          data: campersUnion
        });
      }))
      .catch( error => console.log(error) );
  }

  componentDidMount() {
    this.getAllData();
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)} />
        <CamperList />
      </div>
    );
  }
}

export default App;
