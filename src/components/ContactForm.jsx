import styled from "styled-components";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useState } from "react";
import React from 'react';


const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  padding: 2.5rem 2rem;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 600px) {
    padding: 1.2rem 0.5rem;
    max-width: 98vw;
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  color: #f53803;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #fff8f0;
  border: 1.5px solid #f5d020;
  border-radius: 10px;
  padding: 0.7rem 1rem;
  margin-bottom: 0.5rem;
  transition: border 0.2s;

  &:focus-within {
    border: 1.5px solid #f53803;
  }

  svg {
    margin-right: 0.7rem;
    color: #f53803;
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 1rem;
  width: 100%;
  outline: none;
`;

const TextareaGroup = styled(InputGroup)`
  align-items: flex-start;
`;

const Textarea = styled.textarea`
  border: none;
  background: transparent;
  font-size: 1rem;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  outline: none;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #f5d020 0%, #f53803 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 2px 8px rgba(245,56,3,0.08);

  &:hover {
    background: linear-gradient(90deg, #f53803 0%, #f5d020 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

const SuccessMsg = styled.div`
  background: #e6ffe6;
  color: #1a7f1a;
  border: 1px solid #b2ffb2;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  return (
    <FormWrapper>
      <Form
        action="https://formspree.io/f/mrbqbweq" // Replace with your Formspree form ID
        method="POST"
        onSubmit={() => setSuccess(true)}
      >
        <FormTitle>Contact Me</FormTitle>
        {success && <SuccessMsg>Thank you! Your message has been sent.</SuccessMsg>}
        <InputGroup>
          <FaUser />
          <Input type="text" name="name" placeholder="Your Name" required />
        </InputGroup>
        <InputGroup>
          <FaEnvelope />
          <Input type="email" name="email" placeholder="Your Email" required />
        </InputGroup>
        <TextareaGroup>
          <FaCommentDots style={{ marginTop: "0.3rem" }} />
          <Textarea name="message" placeholder="How can I help you?" required />
        </TextareaGroup>
        <Button type="submit">Send Message</Button>
      </Form>
    </FormWrapper>
  );
}