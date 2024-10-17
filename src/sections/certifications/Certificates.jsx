import styles from "./CertificatesStyles.module.css";
import Development from "../../assets/Development.png";
import Solidity from "../../assets/Solidity.png";
import Dsa from "../../assets/Dsa.png";
import CertificateCard from "../../common/CertificateCard";
function Certificates() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.projectsContainer}>
        <CertificateCard
          src={Dsa}
          link="https://drive.google.com/file/d/19gZk-Oky7QvtDdytUoARBb_EBouB6ULr/view"
          h3="Development"
          p="FullStack Web Development with DevOps"
        />
        <CertificateCard
          src={Development}
          link="https://drive.google.com/file/d/1WnSVLOx7wevWQ18cDNofK_7V0TUMGoRf/view"
          h3="DSA"
          p="W3Grads Data Structures and Development"
        />
        <CertificateCard
          src={Solidity}
          link="https://patika-prod.s3.eu-central-1.amazonaws.com/certificates/pdf/25d966d4"
          h3="Solidity"
          p="RiseIn Certificate of Solidity"
        />
      </div>
    </section>
  );
}

export default Certificates;
