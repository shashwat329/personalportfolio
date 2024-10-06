import React from 'react';
import '../style/Skillbar.css';  // Add CSS for styling

const Skillbar = ({ skillName, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span>{skillName}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Skillbar;
