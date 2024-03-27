import * as React from "react"
import { IconProps } from "../Icon"

const AddCommentIcon: React.FC<IconProps> = ({
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
      fill="white"
      style={{ cursor: "pointer" }}
      //   className={classes}
    >
      <g clip-path="url(#clip0_2162_2716)">
        <path
          d="M2.68376 3.95005L21.5703 3.95005L12.1272 20.306L9.36084 11.2374C9.32085 11.1063 9.25144 10.9861 9.15792 10.8859L2.68376 3.95005Z"
          stroke="black"
          stroke-width="1.8"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2162_2716">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default AddCommentIcon
