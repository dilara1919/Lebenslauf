// components/SkillCard.jsx
import React from 'react';

export default function SkillCard({ icon, title, level }) {
  return (
    <div className="skill-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  );
}
