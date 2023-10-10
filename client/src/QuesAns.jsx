import React from "react";
import "./QuesAns.css";
import { Typewriter } from "react-simple-typewriter";

function QuesAns() {
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
            className="anstext"
            name="answer"
            cols="150"
            rows="10"
            placeholder="lets begin your creative imagination"
          ></textarea>
        </div>

        <button className="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default QuesAns;
