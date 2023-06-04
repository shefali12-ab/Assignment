import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to={"./Card"}>
            <li className="logo">Show Tv</li>
          </Link>
          <li>
            {" "}
            <Link to={"/Movieticket"}>
              <button className="btn-ticket"> Movie Ticket</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
