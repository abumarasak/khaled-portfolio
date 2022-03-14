import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  return (
    <div className="landing d-flex justify-content-center align-items-center">
      <div
        className="text-center text-light"
        data-aos-duration="1000"
        data-aos="fade-down"
      >
        <h1>Khaled Abumarasa</h1>
        <p
          className="fs-2 text-white-50 "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Web Developer
        </p>
        <h3
          className="w-100 d-flex float-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Technologies:
          <span className="tec ms-2">
            <Typewriter
              words={[
                " React",
                " HTML",
                " CSS - SASS",
                " JavaScript ",
                " Git - GitHub",
                " Mysql",
                " MongoDB ",
                " Express ",
                " Node.Js ",
              ]}
              cursor
              loop
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Landing;
