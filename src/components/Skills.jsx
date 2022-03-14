import React, { useEffect } from "react";
import { Skill } from "../data";
import Titel from "./Titel";

const Skills = () => {
  //   const skills = document.querySelector(".my-skills").offsetTop;

  useEffect(() => {
    let progressSpans = document.querySelectorAll(".the-progress span");
    const skills = document.querySelector(".my-skills").offsetTop - 200;
    window.onscroll = () => {
      if (window.scrollY >= skills) {
        progressSpans.forEach((span) => {
          span.style.width = span.dataset.width;
        });
      }
    };
  });
  return (
    <div className="my-skills" id="my-skills">
      <Titel title="My Skills" />
      <div className="container">
        <img
          src="images/skills.png"
          alt=""
          data-aos-duration="1000"
          data-aos="fade-right"
        />
        <div className="skills">
          {Skill.map((i, index) => {
            return (
              <div
                className="skill"
                key={index}
                data-aos-duration="1000"
                data-aos="fade-left"
              >
                <h3>
                  {i.name} <span>{i.procent}</span>
                </h3>
                <div className="the-progress">
                  <span style={{ width: 0 }} data-width={i.procent}></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
