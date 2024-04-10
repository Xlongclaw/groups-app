import React from "react";

export default function Logo():React.JSX.Element {
  return (
    <a className="navbar-brand" href="#">
      <img style={{ width: 130 }} src="./logo.png" alt="Logo" />
    </a>
  );
}
