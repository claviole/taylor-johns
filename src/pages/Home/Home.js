import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Placeholder from "../../components/common/Placeholder";
import AdminKeyDetector from "../../components/AdminTools/AdminKeyDetector";
import EditableContent from "../../components/AdminTools/EditableContent";
import {
  EditToolbar,
  PasswordModalOverlay,
  PasswordModal,
  EditModal,
} from "../../components/AdminTools/AdminStyles";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { storage } from "../../firebase/config";

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
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [pageContent, setPageContent] = useState({
    heroTitle: "Taylor Johns",
    heroSubtitle: "Country-rock artist with a touch of playful charm",
    latestTitle: "Latest Releases",
    card1Title: "New Single",
    card1Text: "Check out my latest release and let me know what you think!",
    card2Title: "Upcoming Shows",
    card2Text: "Don't miss my next live performance. See all upcoming dates.",
    card3Title: "Behind The Scenes",
    card3Text:
      "Follow my journey and get exclusive content on my social feeds.",
  });

  const db = getFirestore();

  useEffect(() => {
    // Fetch custom content from Firebase if it exists
    const unsubscribe = onSnapshot(
      doc(db, "website-content", "home"),
      (doc) => {
        if (doc.exists()) {
          setPageContent({ ...pageContent, ...doc.data() });
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const handleActivateAdmin = (activate) => {
    setIsAdminMode(activate);
  };

  const handleSelectForEditing = (element) => {
    setSelectedElement(element);

    // Set current content for editing
    let currentContent = "";
    switch (element.id) {
      case "heroTitle":
        currentContent = pageContent.heroTitle;
        break;
      case "heroSubtitle":
        currentContent = pageContent.heroSubtitle;
        break;
      case "latestTitle":
        currentContent = pageContent.latestTitle;
        break;
      case "card1Title":
        currentContent = pageContent.card1Title;
        break;
      case "card1Text":
        currentContent = pageContent.card1Text;
        break;
      case "card2Title":
        currentContent = pageContent.card2Title;
        break;
      case "card2Text":
        currentContent = pageContent.card2Text;
        break;
      case "card3Title":
        currentContent = pageContent.card3Title;
        break;
      case "card3Text":
        currentContent = pageContent.card3Text;
        break;
      default:
        break;
    }

    setEditContent(currentContent);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    // Update local state
    const updatedContent = { ...pageContent };

    if (selectedElement && selectedElement.id) {
      updatedContent[selectedElement.id] = editContent;
      setPageContent(updatedContent);
    }

    // Save to Firebase
    try {
      await setDoc(doc(db, "website-content", "home"), updatedContent, {
        merge: true,
      });
      console.log("Content updated successfully");
    } catch (error) {
      console.error("Error updating content:", error);
    }

    setShowEditModal(false);
    setSelectedElement(null);
  };

  const handleSaveAllChanges = async () => {
    try {
      await setDoc(doc(db, "website-content", "home"), pageContent);
      setIsAdminMode(false);
    } catch (error) {
      console.error("Error saving all changes:", error);
    }
  };

  const handleCancelEditing = () => {
    setIsAdminMode(false);
    // Reload the page content from Firebase
    getDoc(doc(db, "website-content", "home")).then((doc) => {
      if (doc.exists()) {
        setPageContent({ ...pageContent, ...doc.data() });
      }
    });
  };

  return (
    <AdminKeyDetector onActivateAdmin={handleActivateAdmin}>
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
            <EditableContent
              type="text"
              id="heroTitle"
              isEditing={isAdminMode}
              onSelectForEditing={handleSelectForEditing}
            >
              <HeroTitle>{pageContent.heroTitle}</HeroTitle>
            </EditableContent>

            <EditableContent
              type="text"
              id="heroSubtitle"
              isEditing={isAdminMode}
              onSelectForEditing={handleSelectForEditing}
            >
              <HeroSubtitle>{pageContent.heroSubtitle}</HeroSubtitle>
            </EditableContent>

            <HeroButton to="/music">Listen Now</HeroButton>
          </HeroContent>
        </HeroSection>

        <LatestSection>
          <EditableContent
            type="text"
            id="latestTitle"
            isEditing={isAdminMode}
            onSelectForEditing={handleSelectForEditing}
          >
            <SectionTitle>{pageContent.latestTitle}</SectionTitle>
          </EditableContent>

          <LatestGrid>
            <LatestCard>
              <Placeholder type="album" height="200px" alt="Latest single" />
              <CardContent>
                <EditableContent
                  type="text"
                  id="card1Title"
                  isEditing={isAdminMode}
                  onSelectForEditing={handleSelectForEditing}
                >
                  <CardTitle>{pageContent.card1Title}</CardTitle>
                </EditableContent>

                <EditableContent
                  type="text"
                  id="card1Text"
                  isEditing={isAdminMode}
                  onSelectForEditing={handleSelectForEditing}
                >
                  <p>{pageContent.card1Text}</p>
                </EditableContent>

                <Link to="/music">Listen &rarr;</Link>
              </CardContent>
            </LatestCard>

            <LatestCard>
              <Placeholder
                type="concert"
                height="200px"
                alt="Live performance"
              />
              <CardContent>
                <EditableContent
                  type="text"
                  id="card2Title"
                  isEditing={isAdminMode}
                  onSelectForEditing={handleSelectForEditing}
                >
                  <CardTitle>{pageContent.card2Title}</CardTitle>
                </EditableContent>

                <EditableContent
                  type="text"
                  id="card2Text"
                  isEditing={isAdminMode}
                  onSelectForEditing={handleSelectForEditing}
                >
                  <p>{pageContent.card2Text}</p>
                </EditableContent>

                <Link to="/contact">Details &rarr;</Link>
              </CardContent>
            </LatestCard>

            <LatestCard>
              <Placeholder type="behind" height="200px" alt="Studio session" />
              <CardContent>
                <EditableContent
                  type="text"
                  id="card3Title"
                  isEditing={isAdminMode}
                  onSelectForEditing={handleSelectForEditing}
                >
                  <CardTitle>{pageContent.card3Title}</CardTitle>
                </EditableContent>

                <EditableContent
                  type="text"
                  id="card3Text"
                  isEditing={isAdminMode}
                  onSelectForEditing={handleSelectForEditing}
                >
                  <p>{pageContent.card3Text}</p>
                </EditableContent>

                <Link to="/feed">View Feed &rarr;</Link>
              </CardContent>
            </LatestCard>
          </LatestGrid>
        </LatestSection>

        {isAdminMode && (
          <EditToolbar>
            <button onClick={handleSaveAllChanges}>Save All Changes</button>
            <button className="cancel-btn" onClick={handleCancelEditing}>
              Exit Admin Mode
            </button>
          </EditToolbar>
        )}

        {showEditModal && (
          <PasswordModalOverlay>
            <EditModal>
              <h2>Edit Content</h2>
              <div className="form-group">
                <label>Content:</label>
                {selectedElement && selectedElement.type === "text" ? (
                  <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                ) : (
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                )}
              </div>
              <div className="button-group">
                <button onClick={() => setShowEditModal(false)}>Cancel</button>
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            </EditModal>
          </PasswordModalOverlay>
        )}
      </HomeContainer>
    </AdminKeyDetector>
  );
};

export default Home;
