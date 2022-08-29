import React from 'react';
import PropTypes from 'prop-types';

export default function ReceiveIcon({
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
          d="M2019 4861 c-43 -14 -77 -41 -93 -76 -14 -29 -16 -116 -16 -749 l0
   -716 -178 0 c-165 0 -181 -2 -222 -22 -73 -38 -101 -125 -62 -195 14 -26 408
   -442 958 -1010 51 -53 80 -75 112 -84 88 -26 72 -40 628 538 278 290 513 537
   521 549 36 55 11 152 -50 198 -26 19 -44 21 -218 24 l-189 3 0 710 c0 786 3
   753 -66 805 l-37 29 -531 2 c-292 1 -543 -2 -557 -6z"
        />
        <path
          d="M240 2328 c-86 -45 -80 31 -80 -1028 0 -915 0 -936 20 -968 11 -18
   34 -41 52 -52 33 -20 56 -20 2323 -20 2197 0 2292 1 2325 18 22 12 44 35 58
   63 l22 44 -2 932 c-3 923 -3 932 -24 959 -11 15 -33 37 -48 48 -27 20 -40 21
   -537 24 -337 2 -523 -1 -549 -8 -70 -19 -86 -51 -180 -362 l-86 -283 -976 -3
   c-924 -2 -977 -1 -982 15 -67 233 -171 562 -183 579 -8 13 -34 32 -57 44 -41
   19 -59 20 -547 20 -504 0 -505 0 -549 -22z"
        />
      </g>
    </svg>
  );
}

ReceiveIcon.propTypes = {
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
