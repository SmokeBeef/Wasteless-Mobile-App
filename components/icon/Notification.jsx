import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Notification(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1 13.228V9.167c0-2.267-1.7-4.156-4-4.628V3.5c0-.472-.5-.944-1-.944s-1 .472-1 .944v1.039c-2.3.472-4 2.361-4 4.628v4.155c-1.1.472-3 1.795-3 4.345 0 .472.5.944 1 .944h4c0 1.565 1.344 2.833 3 2.833 1.658 0 3-1.268 3-2.833h4c.5 0 1-.472 1-.944 0-2.55-1.9-3.873-3-4.44zM6.3 16.722H18c-.536-1.183-1.634-1.648-2.074-1.834a3.7 3.7 0 01-.125-.055c-.4-.189-.7-.566-.7-.944V9.167c0-1.511-1.3-2.834-3-2.834s-3 1.323-3 2.834v4.722c0 .378-.3.755-.6.944a2.634 2.634 0 01-.355.166c-.556.231-1.45.604-1.845 1.723zm5.8 2.834c-.551 0-1-.423-1-.945h2c0 .522-.447.945-1 .945z"
        fill="#030017"
      />
    </Svg>
  );
}

export default Notification;
