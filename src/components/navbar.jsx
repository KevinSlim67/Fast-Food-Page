import React, { Component } from "react";

function NavBar() {
  return (
    <nav className="flex sticky top-0 left-0 z-50 bg-primary_darker">
      <button className="navbar-button hover:bg-primary">About</button>
      <button className="navbar-button hover:bg-primary">Menu</button>
    </nav>
  );
}

export default NavBar;
