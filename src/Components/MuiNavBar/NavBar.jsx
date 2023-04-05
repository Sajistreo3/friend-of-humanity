import React from "react";
import Logo from '../../Assets/Images/Flag_of_Canada.svg'

function NavBar(props) {
  return (
    <nav
      style={{
        backgroundColor: "#fff",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <img src={Logo} alt="Logo" style={{ height: "32px" }} />
      <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
        African Canadian Asian Foundation of Canada Inc.
      </h1>
    </nav>
  );
}

export default NavBar;
