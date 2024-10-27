import React from "react";
import Svg from "./Svg";

// LogoIcon :: Props -> React.Component
export default ({
  width = 63,
  height = 45,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 1796 910"
    aria-label={ariaLabel}
  >
    <path d="M464 904l-50-86h-42l-32 165h45l17-90 52 90h39l32-165h-45zM535 983h131l8-41h-87l5-26h78l7-36h-78l4-22h86l8-40h-131zM926 818l-47 94-13-94h-39l-49 94-10-94h-48l23 165h39l51-94 14 94h39l86-165h-46zM1026 864q1-5 5.5-8t12.5-3q11 0 22 4t21 12l29-32q-12-10-27-15.5t-36-5.5q-29 0-49 14.5t-24 37.5v0q-5 25 10.5 35t40.5 16q16 4 21 7.5t4 8.5h-1q-1 6-6 9t-14 3q-14 0-26.5-5t-22.5-15l-31 30q12 13 30.5 20t40.5 7q29 0 50-14t26-39v0q4-23-10-34t-41-17q-16-4-21-7t-4-9v0 0zM1283 574l286-313-61 313h-225zM1796 574h-112l111-573h-225l-521 573h-485q13-47 50.5-79t94.5-32h228q47 0 88.5-18.5t72.5-50 49.5-73.5 18.5-89q0-48-18.5-90t-49.5-73-72.5-49.5-88.5-18.5h-442l-34 173h476q22 0 38.5 17.5t16.5 40.5-16.5 40.5-38.5 17.5h-228q-60 0-113.5 20t-96.5 57-72.5 88.5-42.5 113.5l-25 135q-14 15-64.5 63t-74.5 40q-11-4-11.5-17.5t-0.5-20.5l102-524h-191l-15 75.5t-32.5 166-32.5 167-15 78.5q-14 69-22 129t8 93q25 52 75.5 35.5t104.5-62 101.5-100.5 66.5-80h1116l-33 173h116q26 0 46-16.5t25-42.5l23-114h111l34-173zM358 1h-73q-52 0-92 33t-49 84l-11 56h191z" />
  </Svg>
);
