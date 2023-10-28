import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Star(props) {
  return (
    <Svg
      width={11}
      height={10}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.459.76C6.299.297 5.6.297 5.44.76l-.813 2.356a.533.533 0 01-.51.348H1.486c-.519 0-.735.625-.315.912l2.13 1.456a.488.488 0 01.194.563L2.68 8.75c-.16.465.405.85.824.564l2.13-1.456a.563.563 0 01.629 0l2.13 1.456c.419.287.983-.1.823-.564l-.813-2.355a.488.488 0 01.194-.563l2.13-1.456c.42-.287.204-.912-.315-.912H7.78a.533.533 0 01-.51-.348L6.46.761z"
        fill="#FFB743"
      />
    </Svg>
  )
}

export default Star
