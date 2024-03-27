import * as React from "react"
import { IconProps } from "../Icon"

const FeedIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
  isActive,
}) => {
  return (
    <svg
      viewBox="0 0 20 16"
      onClick={onClick}
      color={color}
      width={width ? width : 40}
      height={height ? height : 40}
      fill="none"
      style={{ cursor: "pointer" }}
      //   className={classes}
    >
      <line
        y1="1.1"
        x2="20"
        y2="1.1"
        stroke={isActive ? "#44a9f3" : "black"}
        stroke-width="1"
      />
      <line
        y1="8.1"
        x2="20"
        y2="8.1"
        stroke={isActive ? "#44a9f3" : "black"}
        stroke-width="1"
      />
      <line
        y1="15.1"
        x2="20"
        y2="15.1"
        stroke={isActive ? "#44a9f3" : "black"}
        stroke-width="1"
      />
    </svg>
  )
}
export default FeedIcon
