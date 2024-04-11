import React from "react";

export default function HeroSection(): React.JSX.Element {
  return (
    <div
      className="text-white d-flex flex-column justify-content-end"
      style={{
        backgroundImage: "url(group-bg.png)",
        height: 440,
        paddingLeft: 190,
        paddingBottom: 70,
      }}
    >
      <p style={{ lineHeight: "50px" }} className="fs-1 fw-bold">
        Computer Engineering
      </p>
      <p style={{ lineHeight: 0 }} className="fs-5 fw-normal">
        142,765 Computer Engineers follow this
      </p>
    </div>
  );
}
