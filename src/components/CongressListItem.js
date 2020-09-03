import React from 'react';
import { Link } from "react-router-dom";



const CongressListItem = ({ member }) => {

  const {
    first_name,
    last_name,
    id,
    title,
  } = member;

  const fullTitle = `${first_name} ${last_name} - ${title}`;

  return (
    <div className="listItem">
      <span>
        {fullTitle}
      </span>

      <Link to={`/member/${id}`}>
        <button className="detailButton" >Details</button>
      </Link>

    </div>
  )
}

export default CongressListItem;