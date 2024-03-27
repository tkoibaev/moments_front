import * as React from "react"
import { IconProps } from "../Icon"

const GridIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
  isActive,
}) => {
  return (
    <svg
      viewBox="0 0 18 18"
      onClick={onClick}
      color={color}
      width={width ? width : 40}
      height={height ? height : 40}
      fill="none"
      style={{ cursor: "pointer" }}
      //   className={classes}
    >
      <path
        d="M6.44762 1V17M1.19048 11.5524L17.1905 11.5524M11.4 1V17M1.19048 6.6L17.1905 6.6M1 1H17V17H1V1Z"
        stroke={isActive ? "#44a9f3" : "black"}
        stroke-width="1"
        stroke-linejoin="round"
      />
    </svg>
  )
}
export default GridIcon
