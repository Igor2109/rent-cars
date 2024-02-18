import { useEffect } from "react";
import { StyledModalBackdrop } from "./ModalRental.styled";

const Modal = ({ children, closeModal }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
    };
  }, [closeModal]);

  return (
    <StyledModalBackdrop onClick={handleOverlayClick}>
      <div className="settings-modal">
        <button
          className="close-btn"
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </StyledModalBackdrop>
  );
};

export default Modal;
