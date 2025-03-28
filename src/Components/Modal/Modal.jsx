import React, { useState, useEffect } from "react";
import "./Modal.css";
import promotion from "../../assets/images/test.jpeg";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true); // Open modal when page loads

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={promotion} alt="Promotion" className="modal-img" />
      </div>
    </div>
  );
};

export default Modal;
