import React, { useEffect, useState } from "react";
import "./View.css";
import axios from "axios";

function View() {
  const [date, setDate] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/view")
      .then((res) => {
        const resp =res;
        setDate(res.data.data);
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
      {/* {console.log(date)} */}
    </div>
  );
}

export default View;
