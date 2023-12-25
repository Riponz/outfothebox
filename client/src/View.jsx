import React, { useEffect, useState } from "react";
import "./View.css";
import axios from "axios";
import { BASE_URL } from "./utility/links";

function View() {
  const [date, setDate] = useState([])
  useEffect(() => {
    axios
      .get(`${BASE_URL}/getData`)
      .then((res) => {
        setDate(res.data.posts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);

  return (
    <div className="viewMain">
      {date.map((answer) => {
        return <div className="card">{answer.content}</div>;
      })}
    </div>
  );
}

export default View;
