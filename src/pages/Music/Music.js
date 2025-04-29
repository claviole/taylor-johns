import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Placeholder from "../../components/common/Placeholder";

const MusicContainer = styled.div`
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

const AlbumsSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.burnedRed};
  margin-bottom: 2rem;
`;

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const AlbumCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AlbumCover = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const AlbumInfo = styled.div`
  padding: 1rem;
`;

const AlbumTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.burnedRed};
`;

const AlbumYear = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const PlayerSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.beige};
  border-radius: 8px;
`;

const SpotifyEmbed = styled.div`
  width: 100%;
  height: 380px;
`;

const Music = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with real Spotify API fetch
  useEffect(() => {
    // This would be your actual Spotify API call
    setTimeout(() => {
      setAlbums([
        {
          id: 1,
          title: "Western Sunset",
          year: "2023",
          coverUrl: null,
          spotifyId: "album-id-1",
        },
        {
          id: 2,
          title: "Cowgirl Dreams",
          year: "2021",
          coverUrl: null,
          spotifyId: "album-id-2",
        },
        {
          id: 3,
          title: "Open Roads",
          year: "2020",
          coverUrl: null,
          spotifyId: "album-id-3",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <MusicContainer>
      <PageTitle>My Music</PageTitle>
      <Subtitle>Songs from the heart of the country</Subtitle>

      <AlbumsSection>
        <SectionTitle>Albums & EPs</SectionTitle>

        {loading ? (
          <p>Loading albums...</p>
        ) : (
          <AlbumsGrid>
            {albums.map((album) => (
              <AlbumCard key={album.id}>
                <Placeholder type="album" height="250px" alt={album.title} />
                <AlbumInfo>
                  <AlbumTitle>{album.title}</AlbumTitle>
                  <AlbumYear>{album.year}</AlbumYear>
                </AlbumInfo>
              </AlbumCard>
            ))}
          </AlbumsGrid>
        )}
      </AlbumsSection>

      <PlayerSection>
        <SectionTitle>Listen Now</SectionTitle>
        <SpotifyEmbed>
          {/* Placeholder for Spotify embed */}
          <Placeholder type="album" height="380px" alt="Spotify Player" />
        </SpotifyEmbed>
      </PlayerSection>
    </MusicContainer>
  );
};

export default Music;
