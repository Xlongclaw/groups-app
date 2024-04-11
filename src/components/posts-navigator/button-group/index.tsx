import React from "react";

export default function ButtonGroup(): React.JSX.Element {
  return (
    <div className="gap-4 d-flex mb-3">
      <button className="btn btn-secondary special-gray d-flex align-items-center gap-2 ">
        <span className="fw-medium text-black">Write a Post</span>
        <img src="caret-down.png" alt="" />
      </button>
      <button className="btn btn-primary fw-medium d-flex gap-2 align-items-center">
        <img width={24} src="add-people.png" alt="" />
        <span>Join Group</span>
      </button>
    </div>
  );
}
