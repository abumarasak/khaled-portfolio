import { useEffect } from "react";
import SingleProject from "./SingleProject";
import Titel from "./Titel";

const Projects = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".projects-list li");
    const projects = Array.from(document.querySelectorAll(".product"));
    list.forEach((li) => {
      li.addEventListener("click", romoveclass);
      li.addEventListener("click", mangeproduct);
    });
    function romoveclass() {
      list.forEach((li) => {
        li.classList.remove("active", "rounded-pill");
        this.classList.add("active", "rounded-pill");
      });
    }
    function mangeproduct() {
      projects.forEach((project) => {
        project.style.display = "none";
        document.querySelectorAll(`.row ${this.dataset.cat}`).forEach((p) => {
          p.style.display = "block";
        });
      });
    }
  });
  return (
    <div layout className="portfolio text-center pt-5 pb-5">
      <div className="container">
        <Titel title="I Make This" cont="PREPARE TO BE AMAZED" />
        <ul
          className="list-unstyled d-flex justify-content-center mt-5 mb-5 projects-list"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <li data-cat=".all" className="active rounded-pill">
            All
          </li>
          <li data-cat=".react">React</li>
          <li data-cat=".node">Node</li>
          <li data-cat=".js">JS</li>
          <li data-cat=".bootstrap">Bootstrap</li>
        </ul>
        <div className="row">
          <SingleProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
