import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; // Icon für Jobs
import './TimeLine.css';


const jobs = [
  {
    id: 1,
    title: "Working Student",
    company: "Heinrich Hertz Institut (HHI)",
    from: "Oct 2021",
    to: "continuous",
    description: "XR-Development and research in the field of immersive technologies, focusing on virtual and augmented reality applications."
  },
  {
    id: 2,
    title: "Internship",
    company: "Bundesinstitut für Risikobewertung (BfR)",
    from: "Nov 2020",
    to: "Dec 2020",
    description: "Assisted in the development of a web application for the BfR, focusing on data visualization and user interface design."
  },
  { 

    id: 3,
    title: "Working Student",
    company: "CHECK24",
    from: "Jan 2020",
    to: "July 2021",
    description: "Reseacher and data maintenance"
  }
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <h2>Work experiences</h2>
      <div className="timeline">
        {jobs.map(job => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{job.from} – {job.to}</span>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
