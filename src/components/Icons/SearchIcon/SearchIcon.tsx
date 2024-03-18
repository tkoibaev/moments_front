import * as React from "react"
import { IconProps } from "../Icon"

const SearchIcon: React.FC<IconProps> = ({
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
      fill="none"
      width={width ? width : 40}
      height={height ? height : 40}
      //   className={classes}
    >
      <path
        d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
export default SearchIcon
