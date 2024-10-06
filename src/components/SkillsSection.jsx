import React from 'react';
import SkillBar from './Skillbar';

const skills = [
  { skillName: 'Web Development', percentage: 80 },
  { skillName: 'iOS Development', percentage: 90 },
  { skillName: 'Data Structure And Algorithm', percentage: 90 },
  { skillName: 'Communication Skills', percentage: 70 },
  { skillName: 'Leadership Skills', percentage: 70 },
];

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          skillName={skill.skillName}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default SkillsSection;
