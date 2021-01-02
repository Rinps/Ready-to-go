import React from "react";
<script
  src="https://kit.fontawesome.com/d370119762.js"
  crossorigin="anonymous"
></script>;

const Header = (props) => {
  return (
    <div className="Header">
      <h1>
        <i class="fas fa-space-shuttle"></i> <span>{props.text}</span>
      </h1>
    </div>
  );
};

export default Header;
