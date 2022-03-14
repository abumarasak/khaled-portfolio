import React from "react";

const Titel = (props) => {
  return (
    <div
      className="main-title mt-5 mb-5 position-relative text-center"
      data-aos-duration="1000"
      data-aos="flip-down"
    >
      <h2>{props.title}</h2>
      <p className="text-black-50 text-uppercase">{props.cont}</p>
    </div>
  );
};

export default Titel;
