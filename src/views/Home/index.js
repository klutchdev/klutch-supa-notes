// import React, { useContext } from "react";
import React from "react";
import SharpButton from "../../components/buttons/SharpButton";
import Navigation from "../../components/Navigation";
// import { signOut } from "../../firebase";
// import Toast from "../../components/Toast";
// import { ToastContext } from "../../contexts/ToastContext";

const HomePage = ({ openModal }) => {
  // const { toastOpen, setToastOpen } = useContext(ToastContext);
  return (
    <div>
      <Navigation />

      <div style={{ position: `fixed`, bottom: `1rem`, right: `1rem` }}>
        <SharpButton text="+" onClick={openModal} />
      </div>

      {/* <button onClick={() => setToastOpen(true)}>Show toast</button>
      {toastOpen && <Toast type="success" message="🔥 💩" position="left" />} */}
    </div>
  );
};

export default HomePage;
