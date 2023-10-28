import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Search(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.597 2.042a3.556 3.556 0 100 7.111 3.556 3.556 0 000-7.111zM.292 5.597a5.306 5.306 0 119.626 3.08l2.953 2.954a.875.875 0 11-1.237 1.238L8.68 9.916A5.306 5.306 0 01.29 5.598z"
        fill="#1E1E1E"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default Search;
