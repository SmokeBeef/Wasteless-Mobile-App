import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeaderboardIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.551 2.752a.583.583 0 00-1.102 0l-.687 1.977a.583.583 0 01-.539.392l-2.093.042a.583.583 0 00-.34 1.048l1.668 1.265c.194.147.276.4.206.634l-.607 2.003c-.16.53.438.964.892.648l1.718-1.196c.2-.14.466-.14.667 0l1.718 1.196a.583.583 0 00.891-.648l-.606-2.003a.583.583 0 01.206-.634L18.21 6.21a.583.583 0 00-.34-1.048l-2.093-.042a.583.583 0 01-.54-.392l-.687-1.977zM10.5 14c-.644 0-1.167.522-1.167 1.167v10.5h9.334v-10.5c0-.645-.523-1.167-1.167-1.167h-7zM3.5 19.833c-.644 0-1.167.523-1.167 1.167v4.667H7v-5.834H3.5zM21 19.833h3.5c.644 0 1.167.523 1.167 1.167v4.667H21v-5.834z"
        fill="#09AA51"
      />
    </Svg>
  )
}

export default LeaderboardIcon
