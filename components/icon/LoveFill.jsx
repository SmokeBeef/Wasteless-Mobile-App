import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LoveFill(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.88 3.995C9.054 3.45 10.483 4.13 11.353 5c.094.095.182.191.263.288a.5.5 0 00.766 0c.081-.097.169-.193.264-.288.87-.87 2.298-1.55 4.475-1.006 2.173.543 3.814 2.177 4.361 4.23.551 2.068-.019 4.497-2.13 6.608L13.77 20.42a2.497 2.497 0 01-3.533 0l-5.588-5.586c-2.112-2.111-2.682-4.54-2.13-6.608.548-2.053 2.188-3.687 4.361-4.23z"
        fill="#1E1E1E"
      />
    </Svg>
  )
}

export default LoveFill
