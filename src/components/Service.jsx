import React from "react";
import { service } from "../data";
import Titel from "./Titel";

const Service = () => {
  return (
    <div className="service text-center">
      <Titel title="My Service" />
      <div className="row ">
        {service.map((i, index) => {
          return (
            <div
              className="col-md-6 col-lg-4 serv"
              data-aos-duration="1000"
              data-aos={i.animation}
              key={index}
            >
              <div className="icon">
                <i className={i.icon}></i>
              </div>
              <h3>{i.name}</h3>
              <p>{i.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
