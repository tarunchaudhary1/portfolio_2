import styles from "./ProjectsStyles.module.css";
import gamerLink from "../../assets/gamerLink.png";
import collabo from "../../assets/collabo.png";
import ProjectCard from "../../common/ProjectCard";
import hooBank from "../../assets/hooBank.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gamerLink}
          link="https://gamer-link-qrbwxky40-tarunchaudhary1s-projects.vercel.app/"
          h3="GamerLInk"
          p="Streaming App"
        />
        <ProjectCard
          src={collabo}
          link="https://collabo-plum.vercel.app/"
          h3="Collabo"
          p="RealTime Team Colloboration Website"
        />
        <ProjectCard
          src={hooBank}
          link="https://glowing-gingersnap-b3007c.netlify.app/"
          h3="HooBank"
          p="Landing Page for HooBank"
        />
      </div>
    </section>
  );
}

export default Projects;
