import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Success(props) {
  return (
    <Svg
      width={154}
      height={154}
      viewBox="0 0 154 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={154} height={154} rx={77} fill="#F3F3F3" />
      <Path
        d="M41 74.5l26 26L113.5 54"
        stroke="#09AA51"
        strokeWidth={8}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Success
