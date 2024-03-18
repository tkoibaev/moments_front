import * as React from "react"
import { IconProps } from "../Icon"

const HomeIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      onClick={onClick}
      color={color}
      width={width ? width : 40}
      height={height ? height : 40}
      //   className={classes}
    >
      <path d="M21.71,10.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,10.29Z"></path>
    </svg>
  )
}
export default HomeIcon
