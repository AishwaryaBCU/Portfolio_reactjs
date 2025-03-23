import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Aishwarya U, a passionate  developer
            specializing in creating innovative web solutions and user-friendly
            interfaces. As the creator of this Portfolio, I’m dedicated to simplifying 
            development workflows and pushing the boundaries of JavaScript frameworks. 
              Welcome to My Portfolio!
             I appreciate your visit. As a dedicated professional, 
             I specialize in turning ideas into impactful solutions. 
             This portfolio showcases my key projects and skills, 
             reflecting my commitment to quality and innovation. 
             Thank you for taking the time to explore my work;
              I look forward to the opportunity to collaborate.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
