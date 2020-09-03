import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MemberDetailItem from '../components/MemberDetailItem';
import { requestObj } from '../utils/shared';
import './style.scss';


const MemberDetail = ({ match }) => {
  const {
    params: { memberId }
  } = match;

  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState([])

  const fetchMember = async () => {
    setLoading(true)
    const response = await fetch(`https://api.propublica.org/congress/v1/members/${memberId}.json`, requestObj)
    const jsonData = await response.json();
    const results = jsonData.results.map(res => res)[0];
    setMember(results)
    setLoading(false)
  }

  useEffect(() => {
    fetchMember();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="detailContainer">
      <Link to={`/leniolabscodechallenge`}>
        <button > Go Back</button>
      </Link>
      {loading ? <h3>Fetching Member Data...</h3> : <MemberDetailItem data={member} />}
    </div>
  )
}

export default MemberDetail;