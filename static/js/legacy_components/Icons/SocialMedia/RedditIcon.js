import React from "react";
import Svg from "../Svg";

// RedditIcon :: Props -> React.Component
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
    viewBox="0 0 1024 1024"
    aria-label={ariaLabel}
  >
    <path d="M278.855 628.57c0-32.191 26.094-58.285 58.285-58.285s58.285 26.094 58.285 58.285c0 32.191-26.094 58.285-58.285 58.285s-58.285-26.094-58.285-58.285zM628.57 628.57c0-32.191 26.094-58.285 58.285-58.285s58.285 26.094 58.285 58.285c0 32.191-26.094 58.285-58.285 58.285s-58.285-26.094-58.285-58.285zM631.407 753.138c15.012-11.826 36.771-9.249 48.599 5.767s9.247 36.773-5.769 48.601c-41.796 32.928-105.482 54.209-162.237 54.209-56.757 0-120.438-21.281-162.239-54.207-15.016-11.83-17.595-33.587-5.767-48.603 11.83-15.012 33.587-17.593 48.601-5.767 24.062 18.958 71.692 39.362 119.405 39.362s95.343-20.404 119.407-39.362zM978.285 512c0-64.382-52.193-116.57-116.57-116.57-43.821 0-81.957 24.2-101.867 59.945-59.917-32.779-132.922-53.956-212.45-58.838l69.562-156.211 133.139 38.43c11.977 34.007 44.368 58.389 82.471 58.389 48.285 0 87.43-39.143 87.43-87.43s-39.143-87.43-87.43-87.43c-33.295 0-62.242 18.617-77.004 46.004l-148.361-42.824c-16.599-4.788-34.188 3.392-41.212 19.172l-94.505 212.221c-77.538 5.461-148.687 26.432-207.311 58.501-19.914-35.745-58.071-59.929-101.892-59.929-64.382 0-116.57 52.193-116.57 116.57 0 47.642 28.597 88.569 69.552 106.647-7.35 21.883-11.267 44.719-11.267 68.213 0 160.95 182.666 291.43 408 291.43 225.332 0 408-130.48 408-291.43 0-23.487-3.915-46.322-11.263-68.201 40.955-18.080 69.548-59.017 69.548-106.659zM832.57 216.93c18.107 0 32.785 14.678 32.785 32.785s-14.678 32.785-32.785 32.785-32.785-14.678-32.785-32.785 14.678-32.785 32.785-32.785zM104 512c0-32.14 26.145-58.285 58.285-58.285 23.231 0 43.325 13.664 52.681 33.376-30.463 23.101-55.706 49.751-74.376 78.993-21.424-8.625-36.593-29.607-36.593-54.084zM512 909.070c-187.105 0-338.785-99.487-338.785-222.215s151.68-222.215 338.785-222.215c187.105 0 338.785 99.487 338.785 222.215s-151.68 222.215-338.785 222.215zM883.409 566.084c-18.67-29.247-43.913-55.892-74.376-78.993 9.359-19.712 29.453-33.376 52.681-33.376 32.14 0 58.285 26.145 58.285 58.285 0 24.472-15.171 45.459-36.593 54.084z" />
  </Svg>
);
