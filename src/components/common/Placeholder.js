import React from "react";
import styled from "styled-components";

const PlaceholderContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height || "300px"};
  background-color: ${(props) => {
    switch (props.type) {
      case "hero":
        return props.theme.colors.terracotta;
      case "album":
        return props.theme.colors.burnedRed;
      case "concert":
        return props.theme.colors.denimBlue;
      case "behind":
        return props.theme.colors.brown;
      case "feed":
        return props.theme.colors.sage;
      default:
        return props.theme.colors.beige;
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const PlaceholderText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 0 20px;
  font-family: ${(props) => props.theme.fonts.handwritten};
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
`;

const PlaceholderIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${(props) => {
    switch (props.type) {
      case "hero":
        return "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 80%, transparent)";
      case "album":
        return "linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)";
      case "concert":
        return "repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 10px, transparent 10px, transparent 20px)";
      case "behind":
        return "repeating-radial-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1) 10px, transparent 10px, transparent 20px)";
      case "feed":
        return "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)";
      default:
        return "none";
    }
  }};
  background-size: ${(props) => {
    switch (props.type) {
      case "hero":
        return "30px 30px";
      case "album":
        return "20px 20px";
      case "concert":
        return "20px 20px";
      case "behind":
        return "20px 20px";
      case "feed":
        return "20px 20px";
      default:
        return "0";
    }
  }};
  opacity: 0.8;
`;

const Placeholder = ({ type, height, alt }) => {
  const getIcon = () => {
    switch (type) {
      case "hero":
        return <i className="fas fa-music"></i>;
      case "album":
        return <i className="fas fa-compact-disc"></i>;
      case "concert":
        return <i className="fas fa-guitar"></i>;
      case "behind":
        return <i className="fas fa-camera"></i>;
      case "feed":
        return <i className="fab fa-instagram"></i>;
      default:
        return <i className="fas fa-image"></i>;
    }
  };

  const getPlaceholderText = () => {
    switch (type) {
      case "hero":
        return "Hero Image";
      case "album":
        return "Album Cover";
      case "concert":
        return "Concert Photo";
      case "behind":
        return "Behind the Scenes";
      case "feed":
        return "Social Post";
      default:
        return "Image";
    }
  };

  return (
    <PlaceholderContainer type={type} height={height} aria-label={alt}>
      <PatternOverlay type={type} />
      <PlaceholderText>
        <PlaceholderIcon>{getIcon()}</PlaceholderIcon>
        {getPlaceholderText()}
      </PlaceholderText>
    </PlaceholderContainer>
  );
};

export default Placeholder;
