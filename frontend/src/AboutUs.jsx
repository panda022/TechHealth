import React from 'react';
import './AboutUs.css'; // Make sure the path is correct

const AboutUs = () => {
  // Sample team information
  const teamName = "HealthTech Innovators";
  const teamMembers = [
    { name: "Sheen Raina,Mauricea Lawson,Zi Wan,Shruti Chaturvedi", role: "Report Writer and Bussiness Model" },
    { name: "Shruti Chaturvedi", role: "UI Designer" },
    { name: "Pan Gong", role: "Web Developer" },
    
  ];

  return (
    <div className="about-us">
      
      <h1>About Us</h1>
      <h2>Team: {teamName}</h2>
      <h3>Team Members</h3>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
    
    </div>
    
  );
};

export default AboutUs;
