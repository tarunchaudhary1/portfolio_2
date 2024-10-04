import styles from './ProjectsStyles.module.css';
import gamerLink from '../../assets/gamerLink.png';
import collabo from '../../assets/collabo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gamerLink}
          link="gamer-link-eta.vercel.app"
          h3="GamerLInk"
          p="Streaming App"
        />
        <ProjectCard
          src={collabo}
          link="https://collabo-plum.vercel.app/"
          h3="Collabo"
          p="RealTime Team Colloboration Website"
        />
      </div>
    </section>
  );
}

export default Projects;
