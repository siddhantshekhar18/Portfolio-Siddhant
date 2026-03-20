import React from 'react';
import '../styles/Certifications.css';
import javaDevelopmentCertificate from '../assets/Files/Java-Development.png';
import mongoCertification from '../assets/Files/MongoCertification.png';
import internCertification from '../assets/Files/InternCertification.jpg';

export default function Certifications() {
  const certificationsData = [
    {
      id: 1,
      title: 'Getting Started with Full Stack Java Development',
      issuer: 'SkillUp by Simplilearn',
      issueDate: '26th December, 2025',
      credentialId: '9641884',
      image: javaDevelopmentCertificate
    },
    {
      id: 2,
      title: 'Internship Certificate - Software Development Engineer (SDE)',
      issuer: 'Bluestock Fintech',
      issueDate: '30th September, 2025',
      credentialId: 'BFSD91418',
      image: internCertification
    },
    {
      id: 3,
      title: 'Introduction to MongoDB (For Students)',
      issuer: 'MongoDB',
      issueDate: '26th August, 2025',
      credentialId: 'MDBdt8ugv6ht0',
      image: mongoCertification
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional certificates and credentials you can verify</p>

        <div className="certifications-grid">
          {certificationsData.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-image">
                {certificate.image && certificate.image !== 'placeholder' ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="certificate-placeholder">
                    <i className="fas fa-certificate"></i>
                    <p>Upload Certificate Image</p>
                  </div>
                )}
              </div>

              <div className="certificate-content">
                <h3>{certificate.title}</h3>

                <div className="certificate-meta">
                  <p><span>Issued By:</span> {certificate.issuer}</p>
                  <p><span>Issue Date:</span> {certificate.issueDate}</p>
                  <p><span>Credential ID:</span> {certificate.credentialId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
