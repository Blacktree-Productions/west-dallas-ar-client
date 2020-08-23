import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <footer style={{ zIndex: 2 }}>
      <div>footer</div>
      <Link to="/guide">Guide</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/about">About</Link>        
    </footer>
);

export default Nav;