import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  align-items: center;
  padding: 0;
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
  gap: 24px;
  padding: 20px 0;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const Title = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 42px;
  text-align: center;
  font-weight: 800;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.04em;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 32px;
  width: 100%;
  margin-top: 10px;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary}30;
  }
`

const InfoTitle = styled.h3`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 10px;
`

const InfoText = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin-bottom: 0;
  font-weight: 600;
`

const ContactForm = styled(motion.form)`
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
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 30px;
  margin-bottom: 8px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.03em;
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 14px 18px;
  transition: all 0.3s ease;
  font-weight: 600;
  
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 14px 18px;
  resize: vertical;
  min-height: 140px;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bgLight};
  }
`

const ContactButton = styled(motion.button)`
  width: 100%;
  background: ${({ theme }) => theme.primary};
  padding: 18px 24px;
  border-radius: 14px;
  border: none;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.primary}80;
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Title>Get In Touch</Title>
            <Desc>Ready to start a conversation? I'd love to hear from you and explore how we can work together!</Desc>
        </motion.div>

        <ContactFormContainer>
          <ContactInfo>
            {[
              { title: "📍 Location", text: "Hyderabad, Telangana, India" },
              { title: "📧 Email", text: "Available for opportunities" },
              { title: "💼 Availability", text: "Open to new projects" },
              { title: "🚀 Let's Connect", text: "Looking forward to hearing from you!" }
            ].map((item, index) => (
                <InfoCard
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <InfoTitle>{item.title}</InfoTitle>
                    <InfoText>{item.text}</InfoText>
                </InfoCard>
            ))}
          </ContactInfo>

          <ContactForm 
            ref={form} 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactTitle>Send Message</ContactTitle>
            <InputGroup>
              <ContactInput placeholder="Your Name" name="from_name" required />
              <ContactInput placeholder="Your Email" name="from_email" type="email" required />
            </InputGroup>
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Tell me about your project..." rows="4" name="message" required />
            <ContactButton 
                type="submit"
                whileHover={{ scale: 1.02, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
            >
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