import React from "react";

export default function NavigationBar(): React.JSX.Element {
  return (
    <nav
      style={{ paddingLeft: 48, paddingRight: 48 }}
      className="d-flex align-items-center justify-content-between"
    >
      <a className="navbar-brand" href="#">
        <img style={{width:130}} src="./logo.png" alt="Logo" />
      </a>
      <div className="d-flex align-items-center bg-body-secondary py-2 px-3 gap-2 rounded-pill">
        <img src="searchIcon.png" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
          className=" fw-medium border-0"
        />
      </div>
      <div className="d-flex fw-medium align-items-center fs-6">
        <p className="mt-3">Create account.</p>
        <a href="#" className="text-decoration-none">It's Free!</a>
      </div>
    </nav>
  );
}
