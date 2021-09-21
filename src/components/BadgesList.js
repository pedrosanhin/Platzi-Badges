import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import "./styles/Badge.css";
import twitterLogo from "../images/twitter-logo.ico";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <img
                  className="Badge__avatar"
                  src={badge.avatarUrl}
                  alt="Avatar"
                />
                <div className="BadgeListItem__section-info">
                  <h1 className="BadgeListItem__name">
                    {badge.firstName} {badge.lastName}
                  </h1>

                  <div className="BadgeListItem__twitter">
                    <img src={twitterLogo} alt="Twitter logo" />@{badge.twitter}
                  </div>
                  <div> {badge.jobTitle} </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
