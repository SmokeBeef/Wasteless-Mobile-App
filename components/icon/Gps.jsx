import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Gps(props) {
  return (
    <Svg
      width={8}
      height={11}
      viewBox="0 0 8 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 .318a3.5 3.5 0 00-3.5 3.5c0 1.826 1.082 4.29 3.146 6.354a.5.5 0 00.708 0C6.418 8.108 7.5 5.644 7.5 3.818A3.5 3.5 0 004 .318zm0 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#FFB743"
      />
    </Svg>
  )
}

export default Gps
