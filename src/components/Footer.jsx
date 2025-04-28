import styled from "styled-components";
import React from 'react';
const Foot = styled.footer`
  background: #f5d020;
  color: #222;
  text-align: center;
  padding: 1.5rem 0;
  font-weight: 500;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <Foot>
      &copy; {new Date().getFullYear()} Anvekar-Shaping Your Ideas Creative. All rights reserved.
    </Foot>
  );
}