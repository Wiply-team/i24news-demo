import React from "react";
import Svg from "./../Svg";

// NewsIcon :: Props -> React.Component
export default ({
  width = 30,
  height = 25,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 27 30"
    aria-label={ariaLabel}
  >
    <path d="M8.5,0.9 L9.8,1.7 L8.1,4.7 L8.8,4.5 C11.6,3.5 14.6,3.4 17.5,4.4 C20.8,5.6 23.5,7.9 25,11 C26.5,14.1 26.7,17.6 25.5,20.8 C24.4,24.1 22,26.8 18.8,28.3 C18.2,28.6 17.6,28.9 16.9,29.1 C10.8,30.9 4.1,28.1 1.3,22.4 C-0.7,18.3 -0.3,13.3 2.3,9.5 L2.3,9.5 L3.7,10.5 C1.5,13.8 1.2,18 2.9,21.6 C5.6,27.1 12.3,29.4 17.9,26.7 C20.7,25.3 22.7,23 23.7,20.2 C24.7,17.4 24.5,14.4 23.2,11.8 C21.9,9.2 19.6,7.2 16.8,6.2 C14.4,5.4 11.8,5.4 9.3,6.3 L9.3,6.3 L8.8,6.5 L11.6,8 L10.8,9.4 L5.3,6.4 L8.5,0.9 Z M18,13 L18,17.7 L19,17.7 L19,19 L18,19 L18,20.8 L16.6,20.8 L16.6,19 L13.3,19 L13.3,17.5 L16.6,13 L18,13 Z M10.5,12.9 C10.8,12.9 11.2,13 11.5,13.1 C11.8,13.2 12,13.4 12.3,13.6 C12.6,13.8 12.8,14.1 12.9,14.4 C13,14.7 13.1,15 13.1,15.4 C13.1,15.8 13,16.1 12.9,16.4 C12.8,16.6 12.6,16.9 12.4,17.1 C12.2,17.3 12,17.5 11.7,17.7 C11.4,17.9 11.2,18 10.9,18.2 C10.6,18.4 10.4,18.6 10.1,18.8 C9.8,19 9.6,19.2 9.4,19.5 L9.4,19.5 L13,19.5 L13,20.8 L7.3,20.8 C7.3,20.3 7.4,19.9 7.5,19.6 C7.6,19.3 7.8,19 8,18.7 C8.2,18.5 8.5,18.2 8.8,18 C9.1,17.8 9.4,17.5 9.7,17.3 C9.8,17.1 10,17 10.2,16.9 C10.4,16.8 10.5,16.6 10.7,16.5 C10.9,16.4 11.3,16.2 11.4,16 C11.5,15.8 11.6,15.6 11.6,15.4 C11.6,15 11.5,14.7 11.3,14.5 C11.1,14.3 10.8,14.2 10.5,14.2 C10.3,14.2 10.1,14.3 9.9,14.4 C9.7,14.5 9.6,14.6 9.5,14.8 C9.4,15 9.3,15.2 9.3,15.4 C9.2,15.6 9.2,15.8 9.2,16 L9.2,16 L7.7,16 C7.7,15.6 7.8,15.2 7.9,14.8 C8,14.4 8.2,14.1 8.4,13.8 C8.6,13.5 8.9,13.3 9.3,13.1 C9.6,13 10,12.9 10.5,12.9 Z M16.5,15 L14.5,17.7 L16.5,17.7 L16.5,15 Z" />
  </Svg>
);
