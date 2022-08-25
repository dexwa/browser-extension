import React from 'react';
import PropTypes from 'prop-types';

export default function BuyIcon({
  width = '17',
  height = '21',
  fill = 'white',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
<path d="M214 4169 c-75 -28 -137 -88 -176 -167 l-33 -67 0 -1375 0 -1375 33
-67 c39 -80 102 -139 178 -168 54 -20 67 -20 2344 -20 2277 0 2290 0 2344 20
76 29 139 88 178 168 l33 67 0 1375 0 1375 -33 67 c-39 80 -102 139 -178 168
-54 20 -66 20 -2347 19 -2259 0 -2293 0 -2343 -20z m4608 -149 c48 -14 97 -55
114 -97 11 -26 14 -179 14 -828 l0 -795 -2390 0 -2390 0 0 795 c0 653 2 801
14 828 18 43 63 83 106 95 50 14 4482 16 4532 2z m128 -2675 c0 -75 -5 -127
-14 -148 -17 -42 -66 -83 -114 -97 -52 -14 -4472 -14 -4524 0 -48 14 -97 55
-114 97 -9 21 -14 73 -14 148 l0 115 2390 0 2390 0 0 -115z" fill={fill} />
      <rect
        x="0.260986"
        y="15.75"
        width="15.8387"
        height="2.25"
        rx="1"
        fill="white"
      />
    </svg>
  );
}

BuyIcon.propTypes = {
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
