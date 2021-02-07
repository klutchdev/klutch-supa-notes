// import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../contexts/ToastContext/index";

const Toast = ({ message, type, position }) => {
  const { toastOpen, setToastOpen } = useContext(ToastContext);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setToastOpen(false);
    }
  });

  return (
    toastOpen && (
      <div
        // animate={{ translateX: `0%` }}
        // initial={{ translateX: `-100%` }}
        // exit={{ translateX: `-100%` }}
        className={`toast-wrapper toast-${position}`}
      >
        <div className="toast-body">
          {type === "success" && (
            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-evenly`,
              }}
            >
              <ToastCheck />
              <h5>{message}</h5>
            </div>
          )}
          {type === "danger" && (
            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-evenly`,
              }}
            >
              <ToastX />
              <h5>{message}</h5>
            </div>
          )}
        </div>
        <div className="toast-action-bar" onClick={() => setToastOpen(false)}>
          <h5>
            Dismiss <span style={{ color: `#dc5050` }}>({seconds})</span>
          </h5>
        </div>
      </div>
    )
  );
};

const ToastCheck = () => {
  return (
    <>
      <svg
        style={{ color: "#17ae00" }}
        fill="#17ae00"
        height="30"
        margin="auto"
        viewBox="0 0 16 16"
        width="30"
      >
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
      </svg>
    </>
  );
};

const ToastX = () => {
  return (
    <>
      <svg
        style={{ color: "#df0000" }}
        fill="#df0000"
        height="30"
        margin="auto"
        viewBox="0 0 16 16"
        width="30"
      >
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </>
  );
};

export default Toast;
