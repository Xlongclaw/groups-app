import React from "react";

export default function PostWrapper(): React.JSX.Element {
  return (
    <div className="w-100 border rounded-3 overflow-hidden">
      <img className="" src="article1.png" alt="" />
      <div className="p-3">
        <span className="fw-semibold">{`✍️ Article`}</span>
        <div className="d-flex align-items-start justify-content-between my-2">
          <span className="fw-semibold fs-4 w-75">{`What if famous brands had regular fonts? Meet RegulaBrands!`}</span>
          <img className="" src="three-dot-black.png" alt="" />
        </div>
          <span className=" fs-5 w-75 text-body-tertiary">{`I’ve worked in UX for the better part of a decade. From now on, I plan to rei…`}</span>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div className="gap-3 d-flex align-items-center fw-bold">
                <img style={{width:48}} src="sarthak.png" alt="" />
                <span className="fs-6">Sarthak Kamra</span>
            </div>
            <div className="">
                <span className="mx-4">2.3k views</span>
                <img className="bg-body-secondary p-2 rounded" src="share.png" alt="" />
            </div>
          </div>
      </div>
    </div>
  );
}
