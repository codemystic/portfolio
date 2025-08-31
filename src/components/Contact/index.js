import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  align-items: center;
  padding: 40px 0px 60px 0px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
  
  @media (max-width: 960px) {
    padding: 30px 0px 40px 0px;
    margin: 16px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  gap: 32px;
  z-index: 2;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 16px;
    gap: 24px;
  }
`

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 800;
  margin-top: 16px;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: white;
`

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
  }
`

const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
`

const InfoText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
  
  @media (max-width: 768px) {
    padding: 30px 24px;
  }
`

const ContactTitle = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const InputGroup = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

const ContactInput = styled.input`
  flex: 1;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  outline: none;
  font-size: 16px;
  color: #1f2937;
  border-radius: 16px;
  padding: 16px 20px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:focus {
    border: 2px solid #667eea;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    background-color: white;
  }
  
  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }
  
  &:hover {
    border-color: #cbd5e1;
    background-color: white;
  }
`

const ContactInputMessage = styled.textarea`
  width: 100%;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  outline: none;
  font-size: 16px;
  color: #1f2937;
  border-radius: 16px;
  padding: 16px 20px;
  resize: vertical;
  min-height: 140px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: inherit;
  
  &:focus {
    border: 2px solid #667eea;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    background-color: white;
  }
  
  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }
  
  &:hover {
    border-color: #cbd5e1;
    background-color: white;
  }
`

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 18px 24px;
  margin-top: 8px;
  border-radius: 16px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
`

const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4nw9k6u', 'template_jworkac', form.current, 'DEITxbxMAtrixjFD7')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Get In Touch</Title>
        <Desc>Ready to start a conversation? I'd love to hear from you and explore how we can work together!</Desc>
        
        <ContactFormContainer>
          <ContactInfo>
            <InfoCard>
              <InfoTitle>📍 Location</InfoTitle>
              <InfoText>Hyderabad, Telangana, India</InfoText>
            </InfoCard>
            
            <InfoCard>
              <InfoTitle>📧 Email</InfoTitle>
              <InfoText>Available for opportunities and collaborations</InfoText>
            </InfoCard>
            
            <InfoCard>
              <InfoTitle>💼 Availability</InfoTitle>
              <InfoText>Open to new projects and exciting opportunities</InfoText>
            </InfoCard>
            
            <InfoCard>
              <InfoTitle>🚀 Let's Connect</InfoTitle>
              <InfoText>Whether you have a question or just want to say hi, I'll try my best to get back to you!</InfoText>
            </InfoCard>
          </ContactInfo>
          
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Send Message</ContactTitle>
            
            <InputGroup>
              <ContactInput placeholder="Your Name" name="from_name" required />
              <ContactInput placeholder="Your Email" name="from_email" type="email" required />
            </InputGroup>
            
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Tell me about your project or just say hello..." rows="4" name="message" required />
            
            <ContactButton type="submit">
              Send Message ✨
            </ContactButton>
          </ContactForm>
        </ContactFormContainer>
        
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact