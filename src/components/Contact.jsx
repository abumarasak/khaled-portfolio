import { useEffect } from "react";
import Title from "./Titel";

const Contact = () => {
  useEffect(() => {
    let form = document.querySelectorAll("form input,textarea");

    form.forEach((input) => {
      input.onblur = () => {
        sessionStorage.setItem(input.className, input.value);
      };
      if (sessionStorage.getItem(input.className)) {
        input.value = sessionStorage.getItem(input.className);
      }
    });
  });
  return (
    <div className="contact pt-5 pb-5">
      <div className="overlay"></div>
      <div className="container">
        <Title title="Contact" />
        <div className="contact-section">
          <form action="">
            <div className="left" data-aos="fade-right">
              <input
                type="text"
                placeholder=" Your Name"
                name="username"
                className="name"
              />
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                className="phone"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="email"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="subject"
              />
            </div>
            <div className="right" data-aos="fade-left">
              <textarea
                name="message"
                placeholder="Your Message"
                className="message"
              ></textarea>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
