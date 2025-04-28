import { motion } from "framer-motion";
import styled from "styled-components";import React from 'react';


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
`;

export default function AnimatedHero() {
  return (
    <HeroContainer>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", fontWeight: "bold" }}
      >
        Elevate Your Brand with <span style={{ color: "#fff700" }}>Stunning Design</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: "1.5rem", marginTop: "1rem" }}
      >
        2+ years of experience in Logo Design, Web Development, Invitations, and more.
      </motion.p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.1 }}
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          background: "#fff700",
          color: "#222",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Let's Work Together
      </motion.a>
    </HeroContainer>
  );
}