import React, { createContext, useCallback, useContext, useState } from "react";
import "./styles/toaster.css";

const ToastContext = createContext();

const Toaster = ({ children, className, ...props }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, options = {}) => {
    const id = Math.random().toString(36).substr(2, 9); // Generate a small random ID
    const newToast = { id, message, ...options };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    if (options.duration !== 0) {
      setTimeout(() => removeToast(id), options.duration || 3000); // Default duration: 3 seconds
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      <div className={`toaster-container ${className || ""}`} {...props}>
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`toast-item ${type || "normal"}`}
            onClick={() => removeToast(id)}
          >
            {message}
          </div>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

const useToaster = () => {
  const addToast = useContext(ToastContext);
  if (addToast === undefined) {
    throw new Error("useToaster must be used within a Toaster provider");
  }
  return addToast;
};

export { Toaster, useToaster };