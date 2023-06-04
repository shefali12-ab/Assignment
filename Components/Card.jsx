import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/Card.css";
const Card = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setMyData(res.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      <div className="container">
        {isError !== "" && <h2>{isError}</h2>}
        {myData.map((post) => {
          const { show } = post;

          return (
            <div classname="" key={show.id}>
              <div className="firstdiv">
                <img className="" alt="show image" src={show.image.medium} />
                <div className="card_info">
                  <h2>{show.name}</h2>
                  <h3>
                    {" "}
                    <span>
                      {" "}
                      {show.premiered} | {show.rating.average} | {show.genres}
                    </span>{" "}
                  </h3>
                  <Link to={"/Main"}>
                    <button className="btn-summary"> Summary</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Card;
