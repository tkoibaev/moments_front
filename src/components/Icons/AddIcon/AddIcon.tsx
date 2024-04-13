import * as React from "react"
import { IconProps } from "../Icon"

const AddIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
  fill,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      onClick={onClick}
      color={color}
      width={width ? width : 40}
      height={height ? height : 40}
      fill={fill ? fill : "none"}
      //   className={classes}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="black"
        strokeWidth="1.8"
      />
      <line
        x1="12.1"
        y1="6.9"
        x2="12.1"
        y2="17.1"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="6.9"
        y1="11.8"
        x2="17.1"
        y2="11.8"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
export default AddIcon
