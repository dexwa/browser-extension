import React from 'react';
import PropTypes from 'prop-types';

export default function SwapIcon({
  width = '30',
  height = '30',
  color = 'white',
}) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#1098fc"
        stroke="none"
      >
        <path
          d="M3040 4440 l0 -200 -175 0 c-173 0 -176 0 -200 -25 l-25 -24 0 -1151
0 -1151 25 -24 c24 -25 27 -25 200 -25 l175 0 0 -200 0 -200 80 0 80 0 0 200
0 200 175 0 c173 0 176 0 200 25 l25 24 0 1151 0 1151 -25 24 c-24 25 -27 25
-200 25 l-175 0 0 200 0 200 -80 0 -80 0 0 -200z m400 -1400 l0 -1040 -320 0
-320 0 0 1040 0 1040 320 0 320 0 0 -1040z"
        />
        <path
          d="M800 3960 l0 -200 -175 0 c-173 0 -176 0 -200 -25 l-25 -24 0 -1151
0 -1151 25 -24 c24 -25 27 -25 200 -25 l175 0 0 -200 0 -200 80 0 80 0 0 200
0 200 175 0 c173 0 176 0 200 25 l25 24 0 1151 0 1151 -25 24 c-24 25 -27 25
-200 25 l-175 0 0 200 0 200 -80 0 -80 0 0 -200z m400 -1400 l0 -1040 -320 0
-320 0 0 1040 0 1040 320 0 320 0 0 -1040z"
        />
        <path
          d="M4160 3560 l0 -200 -175 0 c-173 0 -176 0 -200 -25 l-25 -24 0 -1151
0 -1151 25 -24 c24 -25 27 -25 200 -25 l175 0 0 -200 0 -200 80 0 80 0 0 200
0 200 175 0 c173 0 176 0 200 25 l25 24 0 1151 0 1151 -25 24 c-24 25 -27 25
-200 25 l-175 0 0 200 0 200 -80 0 -80 0 0 -200z"
        />
        <path
          d="M1920 3400 l0 -200 -175 0 c-173 0 -176 0 -200 -25 l-25 -24 0 -1151
0 -1151 25 -24 c24 -25 27 -25 200 -25 l175 0 0 -200 0 -200 80 0 80 0 0 200
0 200 175 0 c173 0 176 0 200 25 l25 24 0 1151 0 1151 -25 24 c-24 25 -27 25
-200 25 l-175 0 0 200 0 200 -80 0 -80 0 0 -200z"
        />
      </g>
    </svg>
  );
}

SwapIcon.propTypes = {
  /**
   * Width of the icon
   */
  width: PropTypes.string,
  /**
   * Height of the icon
   */
  height: PropTypes.string,
  /**
   * Color of the icon should be a valid design system color
   */
  color: PropTypes.string,
};
