import React from "react";
import twitterLogo from "../utils/logos/twitter.svg";
import facebookLogo from "../utils/logos/facebook.svg";
import youtubeLogo from "../utils/logos/youtube.svg";

const MemberDetailItem = ({ data }) => {
  console.log("data", data);

  const {
    first_name,
    last_name,
    date_of_birth,
    current_party = "",
    twitter_account,
    youtube_account,
    facebook_account,
  } = data;

  const fullName = `${first_name} ${last_name}`;
  const partyName = () => {
    if (current_party.toLowerCase() === "r") {
      return "Republican";
    }
    return "Democrat";
  };

  return (
    <div className='memberDetailBox'>
      <div className='memberInfo'>
        <div>
          <label>Full Name: </label>
          <span>{fullName}</span>
        </div>
        <div>
          <label>Date Of Birth: </label>
          <span>{date_of_birth}</span>
        </div>
        <div>
          <label>Current Party: </label>
          <span>{partyName()}</span>
        </div>
        <div>
          <p>Social Networks</p>
          <a href={`https://www.twitter.com/${twitter_account}`}>
            {" "}
            <img src={twitterLogo} alt='twitter' className='logo' />
          </a>
          <a href={`https://www.youtube.com/${youtube_account}`}>
            {" "}
            <img src={facebookLogo} alt='facebook' className='logo' />
          </a>
          <a href={`https://www.facebook.com/${facebook_account}`}>
            {" "}
            <img src={youtubeLogo} alt='youtube' className='logo' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailItem;
