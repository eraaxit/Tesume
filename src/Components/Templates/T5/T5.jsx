import React from "react";
import "./T5.css";
import { demoProfileData } from "../../../Helpers";

const T5 = () => {
  const {name,currentProfession} = demoProfileData

  return (
    <div>
      <div className="wrapper">
        <div style={{zIndex:"10"}}>
          <img
            className="pic"
            src="https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg"
            alt="dp"
          />
          <div className="name">
          <h3>
            {name}
          </h3>
          <h5>
            {currentProfession}
          </h5></div>
        </div>
        <div className="section" ><p className="para"></p></div>
        <div className="section" style={{transform:"rotate(270deg)",top:"250px"}}></div>
        <div className="section" style={{transform:"rotate(180deg)",top:"250px",left:"250px"}}></div>
        <div className="section" style={{transform:"rotate(90deg)",left:"250px"}}></div>
      </div>
      {/* <p className="para">{mahi}</p> */}
    </div>
  );
};

export default T5;
