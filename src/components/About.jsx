import Title from "./Titel";

const About = () => {
  return (
    <div className="pt-5 pb-5 about ">
      <Title title="About Me" />
      <div className="aboutme ">
        <div className="img" data-aos-duration="1000" data-aos="fade-right">
          <img
            src="./images/khaled-about.jpg"
            alt="khaled abumarasa"
            className="img-fluid"
          />
          <div
            className="letinfo"
            data-aos-duration="1000"
            data-aos="flip-down"
          >
            <span className="text-black-50"> Web Developer </span>
            <h2>Khaled Abumarasa</h2>
          </div>
        </div>
        <div className="info" data-aos-duration="1000" data-aos="fade-left">
          <h3 className="heading">Developer </h3>
          <div className="text" data-aos-duration="1000" data-aos="flip-up">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum maiores nesciunt alias itaque consequatur explicabo
              earum ipsa libero aut eius odit illum, expedita sunt quidem
              ratione veritatis inventore accusantium quo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem sint amet placeat veniam perferendis fugiat.
            </p>
          </div>
          <div className="info-two"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
