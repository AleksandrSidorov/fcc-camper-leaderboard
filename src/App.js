import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CamperList from './components/CamperList';
import axios from 'axios';
import _ from 'lodash';

const BASE_URL = 'https://fcctop100.herokuapp.com/api/';
const RECENT_PATH = 'fccusers/top/recent';
const ALLTIME_PATH = 'fccusers/top/alltime';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      data: [],
      isRecent: true
    };
  }

  getCampers(category) {
    return axios.get(BASE_URL + category);
  }

  getAllData() {
    axios.all([ this.getCampers(RECENT_PATH), this.getCampers(ALLTIME_PATH) ])
      .then( axios.spread( (recent, alltime) => {
        let campersUnion = _.unionBy(recent.data, alltime.data, 'username');
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

  sortByCategory = (cat) => {
    this.setState({
      data: _.sortBy(this.state.data, cat).reverse(),
      isRecent: cat === 'recent' ? true : false
    });
  };

  render() {
    return (
      <div className="container">
        <h1>FreeCodeCamp Campers Leaderboard</h1>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)} />
        <CamperList
          campersList={this.state.data}
          filterText={this.state.filterText}
          isRecent={this.state.isRecent}
          onUserSort={this.sortByCategory} />
      </div>
    );
  }
}

export default App;
