import Footer from "../components/Footer/Footer";
import ServicesItem from "../components/ServicesItem/ServicesItem";
import { projects } from "../helpers/projectList";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services_main">
          <div className="services_head">
            <h1 className="head_title">Услуги</h1>
            <div className="head_text">
              TEQ World - это место, где инновации и талант объединяются
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="services_items">
          {projects.map((project, index) => {
            return (
              <ServicesItem
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Services;
