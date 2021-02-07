import React, { createContext, useState } from "react";
export const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <ToastContext.Provider value={{ toastOpen, setToastOpen }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
