import React from 'react';
import './CamperListItem.css';

const FCC_URL = 'https://www.freecodecamp.com/';

const CamperListItem = (props) => {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>
        <a href={FCC_URL + props.camper.username}>
          <img
            src={props.camper.img}
            className="camper__image"
            alt="Camper Avatar" />
          <span>{props.camper.username}</span>
        </a>
      </td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
}

export default CamperListItem;
