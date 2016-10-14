import React from 'react';
import CamperListItem from './CamperListItem';
import './CamperList.css';

class CamperList extends React.Component {

  handleSort(cat) {
    this.props.onUserSort(cat);
  }

  render () {
    const camperItems = this.props.campersList.map( (camper, index) => {
      return (
        <CamperListItem
          key={camper.username}
          index={index}
          camper={camper} />
      );
    }).slice(0, 100);

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th
              className={this.props.isRecent ? 'list-header list-header--active' : 'list-header'}
              onClick={() => this.handleSort('recent')}>
              Recent
            </th>
            <th
            className={this.props.isRecent ? 'list-header' : 'list-header list-header--active'}
            onClick={() => this.handleSort('alltime')}>
              Alltime
            </th>
          </tr>
        </thead>
        <tbody>
          {camperItems}
        </tbody>
      </table>
    );
  }
}

export default CamperList;
