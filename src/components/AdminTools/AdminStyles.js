import styled from "styled-components";

export const PasswordModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PasswordModal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  h2 {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.burnedRed};
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
  }

  .error-message {
    color: #d73a3a;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .button-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button {
      padding: 0.6rem 1.2rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;

      &:first-child {
        background: #f0f0f0;
        color: #333;
      }

      &:last-child {
        background: ${(props) => props.theme.colors.terracotta};
        color: white;
      }
    }
  }
`;

export const EditableElement = styled.div`
  position: relative;

  &.editable-active {
    outline: 2px dashed ${(props) => props.theme.colors.terracotta};
    outline-offset: 2px;
    cursor: pointer;
  }

  &:hover .edit-indicator {
    display: block;
  }
`;

export const EditIndicator = styled.div`
  display: none;
  position: absolute;
  top: -10px;
  right: -10px;
  background: ${(props) => props.theme.colors.terracotta};
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 5;
`;

export const EditToolbar = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 1rem;
  z-index: 1000;

  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    background: ${(props) => props.theme.colors.terracotta};
    color: white;

    &.cancel-btn {
      background: #f0f0f0;
      color: #333;
    }
  }
`;

export const EditModal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  h2 {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.burnedRed};
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea {
      min-height: 120px;
    }
  }

  .button-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;
