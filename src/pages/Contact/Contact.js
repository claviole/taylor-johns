import React, { useState } from "react";
import styled from "styled-components";
import Placeholder from "../../components/common/Placeholder";

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.terracotta};
    bottom: -10px;
    left: 0;
  }
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.handwritten};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.denimBlue};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.body};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.denimBlue};
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.terracotta};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.burnedRed};
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 1.5rem;
`;

const InfoSection = styled.div`
  margin-bottom: 2rem;
`;

const InfoSectionTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ShowsSection = styled.section`
  margin-top: 4rem;
`;

const ShowsTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 2rem;
`;

const ShowsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ShowCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ShowImage = styled.div`
  height: 200px;
`;

const ShowInfo = styled.div`
  padding: 1.5rem;
`;

const ShowDate = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.burnedRed};
`;

const ShowVenue = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ShowLocation = styled.div`
  color: #666;
  margin-bottom: 1rem;
`;

const TicketButton = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.denimBlue};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.burnedRed};
    color: white;
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <ContactContainer>
      <PageTitle>Contact</PageTitle>
      <Subtitle>Get in touch & catch me live</Subtitle>

      <ContactGrid>
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send Me a Message</FormTitle>

          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        <ContactInfo>
          <InfoTitle>Other Ways to Connect</InfoTitle>

          <InfoSection>
            <InfoSectionTitle>Bookings & Management</InfoSectionTitle>
            <InfoText>
              For booking inquiries, collaborations, or press requests, please
              contact my management team:
            </InfoText>
            <InfoText>
              <strong>Email:</strong> management@taylorjohns.com
              <br />
              <strong>Phone:</strong> (555) 123-4567
            </InfoText>
          </InfoSection>

          <InfoSection>
            <InfoSectionTitle>Social Media</InfoSectionTitle>
            <InfoText>
              The fastest way to stay updated is through my social channels:
            </InfoText>
            <InfoText>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              •
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                TikTok
              </a>{" "}
              •
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Twitter
              </a>{" "}
              •
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Facebook
              </a>
            </InfoText>
          </InfoSection>
        </ContactInfo>
      </ContactGrid>

      <ShowsSection>
        <ShowsTitle>Upcoming Shows</ShowsTitle>
        <ShowsList>
          <ShowCard>
            <ShowImage>
              <Placeholder type="concert" height="100%" alt="Concert venue" />
            </ShowImage>
            <ShowInfo>
              <ShowDate>June 15, 2024 • 8:00 PM</ShowDate>
              <ShowVenue>The Bluebird Cafe</ShowVenue>
              <ShowLocation>Nashville, TN</ShowLocation>
              <TicketButton href="#" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </TicketButton>
            </ShowInfo>
          </ShowCard>

          <ShowCard>
            <ShowImage>
              <Placeholder type="concert" height="100%" alt="Concert venue" />
            </ShowImage>
            <ShowInfo>
              <ShowDate>July 3, 2024 • 7:30 PM</ShowDate>
              <ShowVenue>The Troubadour</ShowVenue>
              <ShowLocation>Los Angeles, CA</ShowLocation>
              <TicketButton href="#" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </TicketButton>
            </ShowInfo>
          </ShowCard>

          <ShowCard>
            <ShowImage>
              <Placeholder type="concert" height="100%" alt="Concert venue" />
            </ShowImage>
            <ShowInfo>
              <ShowDate>July 24, 2024 • 9:00 PM</ShowDate>
              <ShowVenue>Mercury Lounge</ShowVenue>
              <ShowLocation>New York, NY</ShowLocation>
              <TicketButton href="#" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </TicketButton>
            </ShowInfo>
          </ShowCard>
        </ShowsList>
      </ShowsSection>
    </ContactContainer>
  );
};

export default Contact;
