import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import Footer from "../components/Footer/Footer";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <>
      <div className="container">
        <section className="project">
          <div className="project_head">
            <img src={project.img} alt="" />
            <div className="breadCrumb">
              <div className="breadCrumb_title">Услуги</div>
              <div>/</div>
              <div className="breadCrumb_title">{project.title}</div>
            </div>
            <div className="project_title">{project.title}</div>
            <div className="line_white"></div>
            <button className="mainBtn">Оставить заявку</button>
          </div>
          <div className="project_bottom">
            <div className="project_descr">{project.descr}</div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Project;
