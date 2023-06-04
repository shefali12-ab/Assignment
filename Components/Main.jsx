import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/main.css";
const Main = () => {
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
      <div className="main">
        {isError !== "" && <h2>{isError}</h2>}
        {myData.map((post) => {
          const { show } = post;

          return (
            <div className="mainfirstdiv" key={show.id}>
              <h3> {show.name}</h3>
              <p>{show.summary.slice(3)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
