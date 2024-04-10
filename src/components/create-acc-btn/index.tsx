import React from "react";

export default function CreateAccButton(): React.JSX.Element {
  return (
    <div className="d-flex fw-medium align-items-center fs-6">
      <p className="mt-3">Create account.</p>
      <a href="#" className="text-decoration-none">
        It's Free!
      </a>
      <img className="mx-2" src="caret-down.png" alt="" />
    </div>
  );
}
