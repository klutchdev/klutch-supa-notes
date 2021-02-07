import React from "react";
import SharpButton from "../../components/buttons/SharpButton";
import Navigation from "../../components/Navigation";
// import { signOut } from "../../firebase";

const SettingsPage = ({ openModal }) => {
  return (
    <div>
      <Navigation />
      <div style={{ position: `fixed`, bottom: `1rem`, right: `1rem` }}>
        <SharpButton text="+" onClick={openModal} />
      </div>
    </div>
  );
};

export default SettingsPage;
