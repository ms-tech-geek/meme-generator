// Modal.js
import React, { useRef, useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, isOpen, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      {children}
      <button className="close-btn" onClick={onClose}>Close</button>
    </dialog>
  );
};

export default Modal;