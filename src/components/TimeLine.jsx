import { timeLine } from "../data";
import Titel from "./Titel";

const TimeLine = () => {
  return (
    <div className="text-light pt-5 pb-5 time">
      <div className=" text-center">
        <Titel title="Time Line" />
      </div>
      <div className="timeline ">
        <div className="container">
          <div className="timeline-content">
            {timeLine.map((el, index) => {
              return (
                <div key={index}>
                  <div className="clearfix"></div>
                  <div className={el.dir}>
                    <div
                      className="content"
                      data-aos-duration="1000"
                      data-aos={`fade-${el.ane}`}
                    >
                      <h3>{el.heading}</h3>
                      <p>{el.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
