import React, { useRef } from "react";
import ReactDom from "react-dom";

const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <h2>Email Sent</h2>
        <h3>Thanks, I'll be in touch</h3>
        <button onClick={() => setShowModal(false)}>Got it!</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
