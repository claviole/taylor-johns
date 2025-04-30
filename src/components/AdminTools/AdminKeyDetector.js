import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import PasswordModal from "./PasswordModal";

const AdminKeyDetector = ({ children, onActivateAdmin }) => {
  const [keysPressed, setKeysPressed] = useState(new Set());
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [email, setEmail] = useState("");
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
      // Use Firebase Authentication instead of custom password checking
      await signInWithEmailAndPassword(auth, email, password);

      // If we get here, authentication was successful
      setShowPasswordModal(false);
      setEmail("");
      setPassword("");
      setError("");
      onActivateAdmin(true);
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Invalid email or password");
    }
  };

  const handleModalClose = () => {
    setShowPasswordModal(false);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <>
      {children}

      {showPasswordModal && (
        <PasswordModal
          email={email}
          setEmail={setEmail}
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

export default AdminKeyDetector;
