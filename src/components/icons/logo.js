import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8, -2)">
      <g transform="translate(11, 5)">
        {/* Hexagon outline */}
        <polygon
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />

        {/* Replace the 'B' path with text for "AM" */}
        <text
          x="39"
          y="50"
          fill="currentColor"
          textAnchor="middle"
          fontSize="20"
          fontFamily="Arial, sans-serif"
          alignmentBaseline="middle">
          AM
        </text>
      </g>
    </g>
  </svg>
);

export default IconLogo;
