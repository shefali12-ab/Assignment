import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import "../CSS/movieticket.css";
const Movieticket = () => {
  return (
    <>
      <div className="movieticketform">
        <div className="form-div">
          <h2> Book Movie Ticket</h2>
          <form className="">
            <div>
              <input type="text" name="" placeholder="Enter Movie name" />
            </div>

            <div>
              <input type="number" name="" placeholder="Enter Movie Id" />
            </div>

            <button className="btn"> Book ticket</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Movieticket;
