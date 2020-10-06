import React from "react";
import { Link } from "react-router-dom";
import InternalNavbar from "../nav/navbar";
import FriendsIndexItem from "./friends-index-item";
import UserEventItem from "./user-event-item";
import "./user-home.css";

class UserHome extends React.Component {
//   constructor(props) {
//     super(props);

//   }
  render() {
    return (
      <div className="user-home-container">
       
          <div className="left-user-home-container">
            <div class="user-home-internal-title">BREAD</div>
            {/* <SearchBar /> */}
            <FriendsIndexItem />
          </div>

          <div className="right-user-home-container">
            <InternalNavbar />
            <ul className="user-event-tiles">
              {/* {events.map((event) => ( */}
              <UserEventItem />
              {/* ))} */}
            </ul>
          </div>
      
      </div>
    );
  }
}

export default UserHome;