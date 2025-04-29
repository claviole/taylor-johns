import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Placeholder from "../../components/common/Placeholder";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
    z-index: 1;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
`;

const HeroContent = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 20%;
  left: 10%;
  color: white;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fonts.heading};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.fonts.handwritten};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => props.theme.colors.terracotta};
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.burnedRed};
    transform: translateY(-2px);
  }
`;

const LatestSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.burnedRed};
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;

  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.terracotta};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LatestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LatestCard = styled.div`
  background-color: ${(props) => props.theme.colors.beige};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.burnedRed};
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage>
          <Placeholder
            type="hero"
            height="100%"
            alt="Taylor Johns performing"
          />
        </HeroImage>
        <HeroContent>
          <HeroTitle>Taylor Johns</HeroTitle>
          <HeroSubtitle>
            Western-inspired indie artist with a touch of playful charm
          </HeroSubtitle>
          <HeroButton to="/music">Listen Now</HeroButton>
        </HeroContent>
      </HeroSection>

      <LatestSection>
        <SectionTitle>Latest Releases</SectionTitle>
        <LatestGrid>
          <LatestCard>
            <Placeholder type="album" height="200px" alt="Latest single" />
            <CardContent>
              <CardTitle>New Single</CardTitle>
              <p>Check out my latest release and let me know what you think!</p>
              <Link to="/music">Listen &rarr;</Link>
            </CardContent>
          </LatestCard>

          <LatestCard>
            <Placeholder type="concert" height="200px" alt="Live performance" />
            <CardContent>
              <CardTitle>Upcoming Shows</CardTitle>
              <p>
                Don't miss my next live performance. See all upcoming dates.
              </p>
              <Link to="/contact">Details &rarr;</Link>
            </CardContent>
          </LatestCard>

          <LatestCard>
            <Placeholder type="behind" height="200px" alt="Studio session" />
            <CardContent>
              <CardTitle>Behind The Scenes</CardTitle>
              <p>
                Follow my journey and get exclusive content on my social feeds.
              </p>
              <Link to="/feed">View Feed &rarr;</Link>
            </CardContent>
          </LatestCard>
        </LatestGrid>
      </LatestSection>
    </HomeContainer>
  );
};

export default Home;
