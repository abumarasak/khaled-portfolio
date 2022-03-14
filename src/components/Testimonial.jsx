import React, { useEffect, useState } from "react";
import { people } from "../data";
import Title from "./Titel";
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="testimonial">
      <Title title="Testimonial" />
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, text } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img
                src={image}
                alt={name}
                className="person-img"
                data-aos="flip-right"
              />
              <h4 data-aos="fade-up"> {name} </h4>
              <p className="title" data-aos="fade-up">
                {title}
              </p>
              <p className="text" data-aos="fade-down">
                {text}
              </p>
              <i className="fa-solid fa-quote-right icon"></i>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setIndex(index - 1)}
          data-aos="fade-right"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="next"
          onClick={() => setIndex(index + 1)}
          data-aos="fade-left"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
