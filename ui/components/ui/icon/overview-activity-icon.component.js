import React from 'react';
import PropTypes from 'prop-types';

export default function ActivityIcon({
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
          d="M2054 4926 c-21 -18 -28 -32 -28 -60 0 -34 12 -48 162 -199 139 -140
163 -168 169 -201 l6 -38 -824 -824 c-639 -640 -815 -821 -784 -808 50 21 148
22 196 2 79 -34 142 -113 155 -196 6 -37 9 -40 46 -46 121 -19 211 -127 210
-251 0 -33 -7 -78 -16 -100 -13 -31 160 137 803 780 816 815 821 820 861 820
39 0 47 -7 205 -165 153 -152 167 -164 201 -164 28 0 42 7 60 28 l24 27 0 680
0 681 -29 29 -29 29 -681 0 -680 0 -27 -24z"
        />
        <path
          d="M4463 3387 c-516 -515 -533 -533 -533 -570 0 -49 35 -87 82 -87 30 0
78 46 570 538 492 492 538 540 538 570 0 47 -38 82 -87 82 -37 0 -55 -17 -570
-533z"
        />
        <path
          d="M4602 3018 c-216 -216 -400 -405 -408 -420 -20 -38 -18 -63 10 -94
18 -21 32 -28 60 -28 35 0 56 19 442 405 222 222 407 414 410 427 8 28 -13 80
-37 92 -10 6 -32 10 -51 10 -29 0 -68 -35 -426 -392z"
        />
        <path
          d="M2970 2134 c-448 -448 -825 -817 -837 -820 -12 -3 -32 -3 -45 1 -13
4 -95 78 -183 165 -88 86 -168 160 -178 163 -29 11 -82 -17 -95 -49 -9 -22
-12 -198 -10 -702 l3 -674 28 -24 28 -24 680 0 681 0 29 29 c53 54 47 67 -130
245 -87 89 -164 172 -171 184 -6 13 -9 36 -5 50 4 18 285 306 823 845 635 636
808 814 777 801 -140 -59 -312 30 -345 179 l-12 53 -52 12 c-113 27 -188 116
-194 231 -3 46 1 79 12 105 9 22 15 40 13 42 -1 2 -369 -364 -817 -812z"
        />
        <path
          d="M412 2238 c-221 -222 -405 -413 -408 -426 -8 -28 13 -80 37 -92 10
-6 32 -10 51 -10 29 0 68 36 435 402 274 274 404 411 408 429 7 31 -16 83 -40
93 -9 3 -31 6 -48 6 -28 0 -75 -44 -435 -402z"
        />
        <path
          d="M1075 2380 c-11 -4 -257 -246 -548 -537 -474 -476 -527 -532 -527
-560 0 -48 38 -87 84 -87 35 0 59 22 571 534 482 482 535 538 535 567 0 45 -9
62 -41 78 -31 17 -45 18 -74 5z"
        />
      </g>
    </svg>
  );
}

ActivityIcon.propTypes = {
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