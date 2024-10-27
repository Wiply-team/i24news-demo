import React from "react";
import Svg from "../Svg";

// WikipediaIcon :: Props -> React.Component
export default ({
  width = 20,
  height = 20,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 128 128"
    aria-label={ariaLabel}
  >
    <use id="V (Left)" x="3.02" y="24.909" xlinkHref="#V" />
    <use id="V (Right)" x="38.265" y="24.909" xlinkHref="#V" />
    <defs>
      <path
        id="V"
        d="M93.849,0l0,2.139c-2.822,0.501 -4.957,1.388 -6.407,2.659c-2.077,1.889 -4.525,4.779 -6.132,8.672l-32.685,66.712l-2.175,0l-32.813,-67.579c-1.528,-3.469 -3.606,-5.589 -4.233,-6.359c-0.979,-1.195 -2.184,-2.13 -3.614,-2.804c-1.431,-0.675 -3.361,-1.108 -5.79,-1.301l0,-2.139l31.928,0l-0,2.139c-3.683,0.347 -5.439,0.964 -6.537,1.85c-1.097,0.886 -1.645,2.023 -1.645,3.411c-0,1.927 0.901,4.933 2.703,9.018l24.233,45.959l23.692,-45.381c1.842,-4.47 3.37,-7.573 3.37,-9.307c0,-1.118 -0.568,-2.187 -1.705,-3.209c-1.136,-1.021 -2.422,-1.744 -5.125,-2.168c-0.196,-0.038 -0.529,-0.096 -1,-0.173l0,-2.139l23.935,0Z"
      />
    </defs>
  </Svg>
);