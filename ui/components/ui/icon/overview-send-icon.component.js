import React from 'react';
import PropTypes from 'prop-types';

export default function SwapIcon({
  width = '30',
  height = '30',
  fill = 'white',
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
          d="M4828 5071 c-51 -27 -606 -316 -1233 -644 -627 -327 -1675 -875
-2330 -1216 -654 -342 -1200 -632 -1213 -644 -30 -27 -52 -77 -52 -117 0 -40
34 -105 64 -125 35 -23 1367 -477 1382 -471 7 3 199 164 426 358 227 195 850
727 1383 1182 534 456 981 838 995 850 l24 21 -24 -30 c-14 -17 -504 -608
-1090 -1314 -586 -705 -1066 -1286 -1068 -1289 -1 -6 2146 -745 2255 -777 51
-14 139 30 167 83 20 39 610 4015 602 4057 -8 43 -50 94 -93 111 -57 24 -96
17 -195 -35z"
        />
        <path
          d="M1870 845 c0 -561 -1 -549 56 -594 66 -52 155 -47 211 11 40 43 596
799 590 804 -4 4 -845 294 -853 294 -2 0 -4 -232 -4 -515z"
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
   * Fill  of the icon should be a valid design system color
   */
  fill: PropTypes.string,
};
