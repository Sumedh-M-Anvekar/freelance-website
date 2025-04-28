import AnimatedHero from "../components/AnimatedHero";
import ServiceCard from "../components/ServiceCard";
import styled from "styled-components";
import { FaPaintBrush, FaCode, FaCalendarAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';

const ServicesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff8f0;
  padding: 3rem 1rem;
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 2rem;
  margin: 1rem;
  min-width: 250px;
  max-width: 350px;
  flex: 1 1 300px;
  text-align: center;
  transition: box-shadow 0.3s;

  @media (max-width: 768px) {
    min-width: 90vw;
    max-width: 95vw;
    margin: 1rem auto;
    padding: 1.5rem 1rem;
  }
`;

const PortfolioSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  padding: 3rem 1rem;
  gap: 2rem;
`;

const Item = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  margin: 1rem;
  max-width: 320px;
  flex: 1 1 300px;

  @media (max-width: 768px) {
    max-width: 95vw;
    margin: 1rem auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5d020 0%, #f53803 100%);
  color: #fff;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: 2rem auto;

  @media (max-width: 600px) {
    max-width: 95vw;
    padding: 1rem;
  }
`;

const AboutSection = styled.section`
  max-width: 700px;
  margin: 3rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  text-align: center;

  @media (max-width: 600px) {
    max-width: 95vw;
    padding: 1rem;
  }
`;

export default function Home() {
  return (
    <>
      <AnimatedHero />
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>My Services</h2>
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