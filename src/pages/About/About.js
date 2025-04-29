import React from "react";
import styled from "styled-components";
import Placeholder from "../../components/common/Placeholder";

const AboutContainer = styled.div`
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

const BioSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const BioContent = styled.div``;

const BioImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    order: -1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 1.5rem;
`;

const BioText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Quote = styled.blockquote`
  font-family: ${(props) => props.theme.fonts.handwritten};
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.terracotta};
  line-height: 1.5;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
  position: relative;

  &::before,
  &::after {
    content: '"';
    font-size: 4rem;
    color: ${(props) => props.theme.colors.denimBlue};
    opacity: 0.2;
    position: absolute;
  }

  &::before {
    top: -20px;
    left: 0;
  }

  &::after {
    bottom: -40px;
    right: 0;
  }
`;

const StorySection = styled.section`
  margin-bottom: 4rem;
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const StoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>
      <Subtitle>The story behind the music</Subtitle>

      <BioSection>
        <BioContent>
          <SectionTitle>Meet Taylor</SectionTitle>
          <BioText>
            <p>
              Hailing from San Diego by way of Ohio, Taylor Johns is a
              powerhouse vocalist, dynamic performer, and heartfelt songwriter
              blending country, rock, and pop influences into a sound that’s
              both timeless and fresh. With a voice that commands attention and
              a presence that captivates, Taylor delivers high-energy
              performances and intimate acoustic sets alike.
            </p>
            <p>
              A former lead singer of the Navy Rock Band, Taylor has spent years
              performing across the country, honing a sound that reflects both
              resilience and passion. Whether playing a stripped-down solo show
              with just a guitar or bringing an audience to their feet with a
              full-band performance, Taylor brings authenticity, energy, and
              storytelling to every song.
            </p>
            <p>
              With five singles released in the past year and a 12-track album
              in the works for 2026, Taylor is an artist on the rise, aiming to
              carve a lasting name in country music alongside inspirations like
              Carrie Underwood, Chris Stapleton, and Gretchen Wilson. Fans can
              expect a mix of crowd-favorite covers and powerful originals that
              leave a lasting impact.
            </p>
          </BioText>
        </BioContent>

        <BioImageWrapper>
          <Placeholder type="hero" height="500px" alt="Taylor Johns portrait" />
        </BioImageWrapper>
      </BioSection>

      <Quote>
        Music is how I process the world—taking all the beauty, heartbreak, and
        wonder and turning it into something we can share together.
      </Quote>

      <StorySection>
        <SectionTitle>My Journey</SectionTitle>
        <StoriesGrid>
          <StoryCard>
            <Placeholder type="behind" height="200px" alt="Early days" />
            <CardContent>
              <CardTitle>Early Beginnings</CardTitle>
              <p></p>
            </CardContent>
          </StoryCard>

          <StoryCard>
            <Placeholder
              type="behind"
              height="200px"
              alt="Songwriting process"
            />
            <CardContent>
              <CardTitle>Crafting Stories</CardTitle>
              <p></p>
            </CardContent>
          </StoryCard>

          <StoryCard>
            <Placeholder type="behind" height="200px" alt="On the road" />
            <CardContent>
              <CardTitle>Life on the Road</CardTitle>
              <p></p>
            </CardContent>
          </StoryCard>
        </StoriesGrid>
      </StorySection>

      <BioSection>
        <BioImageWrapper>
          <Placeholder
            type="hero"
            height="500px"
            alt="Taylor Johns performing"
          />
        </BioImageWrapper>

        <BioContent>
          <SectionTitle>Influences & Inspiration</SectionTitle>
          <BioText>
            <p>
              With five singles released in the past year and a 12-track album
              in the works for 2026, Taylor is an artist on the rise, aiming to
              carve a lasting name in country music alongside inspirations like
              Carrie Underwood, Chris Stapleton, and Gretchen Wilson. Fans can
              expect a mix of crowd-favorite covers and powerful originals that
              leave a lasting impact.
            </p>
          </BioText>
        </BioContent>
      </BioSection>
    </AboutContainer>
  );
};

export default About;
