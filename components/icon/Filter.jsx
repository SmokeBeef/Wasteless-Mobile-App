import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Filter(props) {
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
        d="M0 3.111c0-.43.348-.778.778-.778h12.444a.778.778 0 110 1.556H.778A.778.778 0 010 3.11zM3.111 7c0-.43.348-.778.778-.778h6.222a.778.778 0 110 1.556H3.89A.778.778 0 013.11 7zM5.444 10.889c0-.43.349-.778.778-.778h1.556a.778.778 0 110 1.556H6.222a.778.778 0 01-.778-.778z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Filter;
