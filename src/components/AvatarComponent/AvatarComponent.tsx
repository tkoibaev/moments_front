import React from "react"
import styles from "./AvatarComponent.module.scss"
import clsx from "clsx"

export type AvatarComponentProps = {
  image: string
  className?: string
  size?: number
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  image,
  className,
  size,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(styles.avatar, className)}
    >
      <img src={image} />
    </div>
  )
}

export default AvatarComponent
