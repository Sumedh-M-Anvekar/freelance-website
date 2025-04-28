import PortfolioItem from "../components/PortfolioItem";
import styled from "styled-components";
import React from 'react';

const PortfolioSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  padding: 3rem 1rem;
`;

export default function Portfolio() {
  // Replace with your real portfolio images and descriptions
  const items = [
    {
      image: "https://marketplace.canva.com/EAFvxbQlQwU/1/0/1600w/canva-blue-modern-artificial-intelligence-technology-logo-fSD54RypYpE.jpg",
      title: "Logo for Tech Startup",
      description: "A modern, minimal logo for a tech company.",
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2023/8/332112112/KO/OT/LM/2672556/web-development-programming-resized.jpg",
      title: "Website",
      description: "A responsive website for your need.",
    },
    {
      image: "https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "2024 Calendar",
      description: "A custom illustrated calendar for a local business.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHlgfhflm9Tddovb_gdZJyfTzddoxgPWi3qzzc4Ns_fgksRHXUd_PrUMqBRuCh3dXQLU&usqp=CAU",
      title: "Wedding Invitation",
      description: "Elegant invitation design for a wedding.",
    },
  ];

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>Portfolio</h2>
      <PortfolioSection>
        {items.map((item, idx) => (
          <PortfolioItem key={idx} {...item} />
        ))}
      </PortfolioSection>
    </>
  );
}