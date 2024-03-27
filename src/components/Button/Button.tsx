import React from "react"
import styles from "./Button.module.scss"
import clsx from "clsx"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  children: React.ReactNode
  state?: boolean
  className?: string
  disabled?: boolean
  mode: "active" | "passive" | "light"
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  mode,
  ...props
}) => {
  // Выбор класса в зависимости от значения mode
  const modeClass =
    mode === "active"
      ? styles["button-active"]
      : mode === "passive"
      ? styles["button-passive"]
      : styles["button-light"]

  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(styles["button"], modeClass, className)}
    >
      <p className={styles.button__text}>{children}</p>
    </button>
  )
}

export default Button
