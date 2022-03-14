import { projects } from "../data";
const SingleProject = () => {
  return (
    <>
      {projects.map((i) => {
        return (
          <div
            data-aos={i.mation}
            data-aos-duration="1000"
            className={`col-sm-6 col-md-4 col-lg-3 product all ${i.cat} `}
            key={i.id}
          >
            <div className="box mb-3 bg-white" data-work={i.name}>
              <img className="img-fluid" src={i.img} alt={i.name} />
              <div className="link">
                <a className="web" href={i.web}>
                  <i className="fa-solid fa-link"></i>
                </a>
                <a className="git" href={i.github}>
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleProject;
