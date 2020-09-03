import React from 'react';
import CongressListItem from './CongressListItem';


const CongressList = ({ membersList, chamber }) => {

  const title = `Members of ${chamber}`

  return (
    <div className="listContainer">
      <h2>{title}</h2>
      <ul>
        {
          membersList.length ? membersList.map((member) =>
            <CongressListItem key={member.api_uri} member={member} />
          ) : <p>No members found with that search criteria </p>
        }
      </ul>
    </div>
  )
}

export default CongressList;