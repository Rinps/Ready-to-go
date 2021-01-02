import React from "react";

const Footer = (props) => {
  return (
    <div className="Footer">
      <p>
        Made vith <strong>{props.tech}</strong> at{" "}
        <strong>{props.school}</strong> by <strong>{props.creator}</strong>
      </p>
    </div>
  );
};

export default Footer;
