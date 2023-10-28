import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Chat(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.583 1.833a2.75 2.75 0 00-2.75 2.75v9.167a2.75 2.75 0 002.75 2.75h7.104l4.24 3.392c.6.48 1.49.053 1.49-.716V16.5h.472a2.278 2.278 0 002.278-2.278V4.583a2.75 2.75 0 00-2.75-2.75H4.583z"
        fill="#1E1E1E"
      />
    </Svg>
  );
}

export default Chat;
