import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowBack(props) {
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
        d="M3.437 6.175a1.208 1.208 0 000 1.65l5.555 5.833a1.074 1.074 0 001.571 0 1.208 1.208 0 000-1.65L5.793 7l4.77-5.008a1.208 1.208 0 000-1.65 1.074 1.074 0 00-1.57 0L3.436 6.175z"
        fill="#1E1E1E"
      />
    </Svg>
  )
}

export default ArrowBack
