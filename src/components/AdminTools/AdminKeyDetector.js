import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { storage } from "../../firebase/config";

const AdminKeyDetector = ({ children, onActivateAdmin }) => {
  const [keysPressed, setKeysPressed] = useState(new Set());
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Add the key to the set of pressed keys
      setKeysPressed((prevKeys) => new Set([...prevKeys, e.key]));

      // Check if our specific combination is pressed (Control + Shift + E)
      if (
        keysPressed.has("Control") &&
        keysPressed.has("Shift") &&
        (keysPressed.has("e") || keysPressed.has("E"))
      ) {
        // Show password modal
        setShowPasswordModal(true);
        // Clear the keys
        setKeysPressed(new Set());
      }
    };

    const handleKeyUp = (e) => {
      // Remove the key from the set when released
      setKeysPressed((prevKeys) => {
        const newKeys = new Set([...prevKeys]);
        newKeys.delete(e.key);
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keysPressed]);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch password from Firebase
      const db = getFirestore();
      const passwordDoc = await getDoc(doc(db, "password", "admin-password"));

      if (passwordDoc.exists() && passwordDoc.data().password === password) {
        setShowPasswordModal(false);
        setPassword("");
        setError("");
        onActivateAdmin(true);
      } else {
        setError("Incorrect password");
      }
    } catch (error) {
      console.error("Error fetching password:", error);
      setError("Error verifying password");
    }
  };

  const handleModalClose = () => {
    setShowPasswordModal(false);
    setPassword("");
    setError("");
  };

  return (
    <>
      {children}

      {showPasswordModal && (
        <PasswordModal
          password={password}
          setPassword={setPassword}
          error={error}
          onSubmit={handlePasswordSubmit}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

const PasswordModal = ({ password, setPassword, error, onSubmit, onClose }) => {
  return (
    <div className="password-modal-overlay">
      <div className="password-modal">
        <h2>Admin Authentication</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="password">Enter admin password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="button-group">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Verify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminKeyDetector;
