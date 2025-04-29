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
              Born and raised under the wide-open skies of Montana, I've always
              felt most at home where the prairies meet the mountains. My
              journey into music began when my grandfather gifted me his
              cherished vintage guitar on my tenth birthday.
            </p>
            <p>
              That old six-string became my constant companion, and I quickly
              found myself writing songs that told stories of the American
              West—not just as it was, but as it continues to be: wild, hopeful,
              and ever-changing.
            </p>
            <p>
              My sound blends traditional country roots with modern indie
              sensibilities, creating something that feels both nostalgic and
              fresh. I draw inspiration from the natural world, everyday human
              connections, and the unique characters I've met along my journey.
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
              <p>
                From open mic nights at the local diner to performing at state
                fairs, my early years were all about finding my voice and
                connecting with audiences one song at a time.
              </p>
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
              <p>
                Songwriting has always been my primary form of expression. I
                believe the best songs are the ones that make you feel like
                you've lived them yourself—even if the story isn't yours.
              </p>
            </CardContent>
          </StoryCard>

          <StoryCard>
            <Placeholder type="behind" height="200px" alt="On the road" />
            <CardContent>
              <CardTitle>Life on the Road</CardTitle>
              <p>
                Touring has taken me across the country, from intimate venues to
                festival stages. Each place adds a new layer to my music and
                introduces me to incredible fellow artists and fans.
              </p>
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
              My musical influences range from classic country legends like
              Dolly Parton and Johnny Cash to contemporary artists like Kacey
              Musgraves and Jason Isbell. I'm also deeply inspired by folk
              storytellers and indie artists who bring authenticity to their
              craft.
            </p>
            <p>
              Beyond music, I find inspiration in literature—particularly
              American writers who capture the spirit of place and the
              complexities of human relationships. Authors like Willa Cather,
              Annie Proulx, and Cormac McCarthy have shaped how I approach
              storytelling in my songs.
            </p>
            <p>
              When I'm not making music, you'll find me hiking with my rescue
              dog Blue, searching for vintage western wear in small-town thrift
              shops, or experimenting with new recipes in my kitchen.
            </p>
          </BioText>
        </BioContent>
      </BioSection>
    </AboutContainer>
  );
};

export default About;
