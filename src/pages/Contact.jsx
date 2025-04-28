// src/pages/Contact.jsx
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import React from 'react';

const ContactSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  background: #fff8f0;
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

const ContactContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export default function Contact() {
  return (
    <ContactSection>
      <ContactContent>
        <h2 style={{ marginBottom: "0.5rem" }}>Contact Me</h2>
        <p style={{ marginBottom: "1.5rem" }}>Have a project in mind? Let's talk!</p>
        <ContactForm />
      </ContactContent>
    </ContactSection>
  );
}