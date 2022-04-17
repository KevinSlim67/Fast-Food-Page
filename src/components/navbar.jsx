import React, { Component } from "react";

function NavBar() {
  return (
    <nav className="flex sticky top-0 left-0 z-50 bg-accent">
      <button className="navbar-button hover:bg-accent_lighter">About</button>
      <button className="navbar-button hover:bg-accent_lighter">Menu</button>
    </nav>
  );
}

export default NavBar;
