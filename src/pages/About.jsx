// src/pages/About.jsx
import styled from "styled-components";
import React from 'react';
const AboutSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  background: #fff;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1.5rem 0.5rem;
  }
`;

const AboutContent = styled.div`
  width: 100%;
  max-width: 700px;
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1rem;
    max-width: 98vw;
  }
`;

export default function About() {
  return (
    <AboutSection>
      <AboutContent>
        <h2>About Me</h2>
        <p>
          Hi! I'm <b>Anvekar</b>, a passionate designer and developer with over 2 years of experience helping brands stand out. I specialize in logo design, website development, calendar and invitation design, and more. My mission is to deliver creative, effective solutions that help your business grow.
        </p>
        <p>
          Let's work together to bring your vision to life!
        </p>
      </AboutContent>
    </AboutSection>
  );
}