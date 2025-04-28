import { motion } from "framer-motion";
import styled from "styled-components";
import React from 'react';
const Item = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  margin: 1rem;
  max-width: 320px;
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Desc = styled.div`
  padding: 1rem;
`;

export default function PortfolioItem({ image, title, description }) {
  return (
    <Item whileHover={{ scale: 1.03 }}>
      <Img src={image} alt={title} />
      <Desc>
        <h4>{title}</h4>
        <p>{description}</p>
      </Desc>
    </Item>
  );
}