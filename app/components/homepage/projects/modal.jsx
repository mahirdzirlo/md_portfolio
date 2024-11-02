import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
      <div className="max-w-screen max-h-screen overflow-y-auto relative max-w-full ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white-600 hover:text-violet-300 text-3xl font-bold "
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
