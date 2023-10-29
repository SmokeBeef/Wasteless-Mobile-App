import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function AddImage(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      
    >
      <Rect width={100} height={100} rx={8} fill="#DEDEDE" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.251 36.5c1.095 0 2.12.548 2.743 1.466l1.428 2.106a3.316 3.316 0 002.742 1.465h1.544c1.818 0 3.292 1.502 3.292 3.354v13.714C65 60.48 63.508 62 61.667 62H38.333C36.493 62 35 60.48 35 58.605V44.933c0-1.876 1.492-3.396 3.333-3.396h1.597c1.117 0 2.16-.57 2.777-1.518l1.304-2.001a3.318 3.318 0 012.777-1.518h6.463zm.316 3.333a.75.75 0 00-.624-.333h-5.837a.75.75 0 00-.63.344l-1.12 1.742c-1.196 1.86-3.167 3.022-5.31 3.152l-.404.012h-.892a.75.75 0 00-.75.75v12.75c0 .414.336.75.75.75h22.5a.75.75 0 00.75-.75V45.5a.75.75 0 00-.75-.75h-.795c-2.12 0-4.113-1.011-5.408-2.726l-.234-.33-1.246-1.861zM50 42.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
        fill="#1E1E1E"
      />
    </Svg>
  )
}

export default AddImage