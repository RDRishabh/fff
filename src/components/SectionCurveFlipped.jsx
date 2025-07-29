import React from "react";

const SectionCurve = ({ className = "", color = "#000000" }) => (
  <div className={className} style={{ margin: 0, padding: 0, lineHeight: 0 }}>
    <svg
      viewBox="0 0 1919 193"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: "scaleY(-1)", marginBottom: "-1px" }}
      preserveAspectRatio="none"
    >
      <path
        d="M0 0C0 106.025 85.9751 192 192 192H959.5H1727C1833.02 192 1919 106.025 1919 0V0H0V0Z"
        fill={color}
      />
      <path
        d="M959.5 192C959.5 192 959.5 192 959.5 192C959.5 192 959.5 192 959.5 192ZM959.5 192C959.5 192 959.5 192 959.5 192C959.5 192 959.5 192 959.5 192ZM959.5 192C959.5 192 959.5 192 959.5 192C959.5 192 959.5 192 959.5 192Z"
        fill={color}
      />
    </svg>
  </div>
);

export default SectionCurve;
