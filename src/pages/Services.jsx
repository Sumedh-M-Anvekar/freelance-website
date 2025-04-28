import ServiceCard from "../components/ServiceCard";
import styled from "styled-components";
import { FaPaintBrush, FaCode, FaCalendarAlt, FaEnvelopeOpenText } from "react-icons/fa";
import React from 'react';

const ServicesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff8f0;
  padding: 3rem 1rem;
`;

export default function Services() {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>Services I Offer</h2>
      <ServicesSection>
        <ServiceCard
          icon={<FaPaintBrush />}
          title="Logo Design"
          description="Unique, memorable logos tailored to your brand."
        />
        <ServiceCard
          icon={<FaCode />}
          title="Website Development"
          description="Modern, responsive websites that convert visitors."
        />
        <ServiceCard
          icon={<FaCalendarAlt />}
          title="Calendar Design"
          description="Custom calendar designs for personal or business use."
        />
        <ServiceCard
          icon={<FaEnvelopeOpenText />}
          title="Invitation Design"
          description="Creative invitations for any occasion."
        />
      </ServicesSection>
    </>
  );
}