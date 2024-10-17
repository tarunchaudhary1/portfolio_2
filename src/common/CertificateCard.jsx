import React from "react";

function CertificateCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" height={200} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default CertificateCard;
