import React from 'react';
import { data } from '../utils/shared'
import './style.scss';


const ButtonsList = ({ setChamber }) => {

  return (
    <>
      <h1>Select Chamber</h1>
      <div className="houseButtons">
        {data.map(d => (
          <button key={d.chamber} onClick={() => setChamber(d.chamber)}>{d.chamber}</button>
        ))}
      </div>
    </ >
  )
}

export default ButtonsList;