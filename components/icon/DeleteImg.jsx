import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DeleteImg(props) {
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
        d="M13.667 7A6.667 6.667 0 11.333 7a6.667 6.667 0 0113.334 0zm-9.334-.667a.667.667 0 000 1.334h5.334a.667.667 0 100-1.334H4.333z"
        fill="#1E1E1E"
      />
    </Svg>
  )
}

export default DeleteImg
