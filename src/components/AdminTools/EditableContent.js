import React, { useState } from "react";
import { EditableElement, EditIndicator } from "./AdminStyles";

const EditableContent = ({
  children,
  type,
  id,
  isEditing,
  onSelectForEditing,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!isEditing) {
    return children;
  }

  return (
    <EditableElement
      className={`editable-element ${isEditing ? "editable-active" : ""}`}
      onClick={() => onSelectForEditing({ type, id })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <EditIndicator className="edit-indicator">✏️</EditIndicator>
      )}
      {children}
    </EditableElement>
  );
};

export default EditableContent;
