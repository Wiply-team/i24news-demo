import React from "react";
import Svg from "../Svg";

// ShareIcon :: Props -> React.Component
export default ({
  width = 16,
  height = 20,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 840 1062"
    aria-label={ariaLabel}
  >
    <g transform="translate(0,1062) scale(0.1,-0.1)" stroke="none">
      <path
        d="M4136 10203 c-11 -3 -36 -16 -55 -28 -20 -13 -347 -335 -727 -717
      -738 -740 -714 -713 -714 -810 0 -51 46 -135 93 -169 59 -42 110 -54 177 -39
      l55 12 500 499 c275 274 504 499 508 499 4 0 7 -1196 7 -2658 l0 -2659 23 -44
      c13 -24 43 -57 66 -74 40 -28 49 -30 131 -30 82 0 91 2 131 30 23 17 53 50 66
      74 l23 44 0 2659 c0 1462 3 2658 8 2658 4 0 228 -221 497 -491 270 -270 504
      -498 520 -506 17 -10 56 -17 91 -17 51 -1 68 4 110 29 89 55 130 155 104 252
      -12 45 -60 95 -714 752 -479 481 -714 709 -741 722 -38 18 -114 23 -159 12z"
      />
      <path
        d="M977 7529 c-170 -40 -308 -192 -336 -369 -15 -90 -15 -6279 -1 -6370
      23 -147 118 -271 257 -338 l78 -37 3195 -3 c2151 -1 3211 1 3243 8 174 37 319
      191 347 370 14 91 14 6280 -1 6370 -28 180 -166 329 -340 369 -28 7 -379 11
      -961 11 l-918 0 0 -225 0 -225 890 0 890 0 0 -3120 0 -3120 -3117 2 -3118 3
      -3 3118 -2 3117 890 0 890 0 0 225 0 225 -922 -1 c-508 -1 -940 -5 -961 -10z"
      />
    </g>
  </Svg>
);