import React, { useState } from "react";
import "./QuesAns.css";
import { Typewriter } from "react-simple-typewriter";
import axios from "axios"
import {BASE_URL} from "./utility/links"

function QuesAns() {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const postRequest =(e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/postAns`, {
      answer:answer,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
    setAnswer("")
  }

  return (
    <div className="main">
      <div className="ques">
        <div className="start">
          What would you do if{" "}
          <span className="question">
            <Typewriter
              words={["you had unlimited money"]}
              loop={1}
              cursor
              cursorStyle="?"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        {/* <div className="question"></div> */}
      </div>

      <form>
        <div className="answer">
          <textarea
          value={answer}
            onChange={handleAnswer}
            className="anstext"
            name="answer"
            cols="150"
            rows="10"
            placeholder="lets begin your creative imagination"
          ></textarea>
        </div>

        <button onClick={postRequest} className="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default QuesAns;
