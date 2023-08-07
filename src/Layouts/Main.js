import "./Main.css";
import React from "react";
import Arrow from "../Assets/arrow-down-sign-to-navigate 1.png";
import person1 from "../Assets/image 183.png";

const Main = () => {
  return (
    <div>
      <div className="header">
        <h1>
          Hire the{" "}
          <span
            style={{
              color: "var(--cta, #ffc223)",
              fontFamily: " Work Sans",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Elite 1%{" "}
          </span>
          of Accounting Talent
        </h1>
        <p>a small description here</p>
        <div className="input">
          <input type="text" placeholder="Enter Your Professional Email ID" />
          <button>Submit</button>
        </div>
        <button className="butt">
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "20px 21px 24px 34px",
              }}
            >
              Explore All Solutions{" "}
            </span>{" "}
            <img
              src={Arrow}
              style={{ width: "22px", height: "27px", margin: "23 25 19 10" }}
            />
          </span>
        </button>
      </div>
      <div className="box">
       {/* <h1>SKILLED <span id="accountancy">ACCOUNTANTS</span></h1>
          <img src={person1} /> */}
        <div className="box1">
         
        </div>
        <div className="box1">
         
        </div>
        <div className="box1">
         
        </div>
      </div>
    </div>
  );
};
export default Main;
