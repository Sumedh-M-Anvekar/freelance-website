import { motion } from "framer-motion";
import styled from "styled-components";
import React from 'react';

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 2rem;
  margin: 1rem;
  min-width: 250px;
  flex: 1;
  text-align: center;
  transition: box-shadow 0.3s;
`;

export default function ServiceCard({ icon, title, description }) {
  return (
    <Card
      whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(245,56,3,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div style={{ fontSize: "2.5rem" }}>{icon}</div>
      <h3 style={{ margin: "1rem 0 0.5rem" }}>{title}</h3>
      <p>{description}</p>
    </Card>
  );
}