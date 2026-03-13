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
  padding: 80px 0;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 32px;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 800;
  margin-top: 16px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 19px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  width: 100%;
  margin-top: 24px;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InfoCard = styled.div`
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary}30;
  }
`

const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 10px;
`

const InfoText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin-bottom: 0;
`

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  gap: 20px;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`

const ContactTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Outfit', sans-serif;
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
  background-color: ${({ theme }) => theme.bg};
  border: 2px solid ${({ theme }) => theme.card_light};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 14px 18px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bgLight};
  }
`

const ContactInputMessage = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  border: 2px solid ${({ theme }) => theme.card_light};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 14px 18px;
  resize: vertical;
  min-height: 140px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: inherit;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bgLight};
  }
`

const ContactButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  padding: 16px 24px;
  border-radius: 14px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px -10px ${({ theme }) => theme.primary};
  
  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.primary}dd;
    box-shadow: 0 15px 30px -10px ${({ theme }) => theme.primary}80;
  }
`

const Contact = () => {
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
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact