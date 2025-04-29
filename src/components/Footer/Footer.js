import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.brown};
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.terracotta};
  }
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.beige};
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.terracotta};
  }
`;

const FooterExternalLink = styled.a`
  color: ${(props) => props.theme.colors.beige};
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.terracotta};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.terracotta};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const NewsletterInput = styled.input`
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border: none;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.body};
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.terracotta};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.burnedRed};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.beige};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // This would be where you'd handle the newsletter signup
    console.log("Newsletter signup submitted");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Taylor Johns</FooterTitle>
          <p>Western-inspired indie artist with a touch of playful charm</p>
          <SocialLinks>
            <SocialLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </SocialLink>
            <SocialLink
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </SocialLink>
            <SocialLink
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/music">Music</FooterLink>
          <FooterLink to="/feed">Feed</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Music</FooterTitle>
          <FooterExternalLink
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </FooterExternalLink>
          <FooterExternalLink
            href="https://apple.music.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Music
          </FooterExternalLink>
          <FooterExternalLink
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoundCloud
          </FooterExternalLink>
          <FooterExternalLink
            href="https://bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp
          </FooterExternalLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Stay Updated</FooterTitle>
          <p>
            Subscribe to my newsletter for tour dates, new releases, and more!
          </p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Your email address"
              required
            />
            <SubmitButton type="submit">Subscribe</SubmitButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>

      <Copyright>© {currentYear} Taylor Johns. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
