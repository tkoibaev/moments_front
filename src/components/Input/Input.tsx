import React, { useCallback } from "react"
import styles from "./Input.module.scss"
import clsx from "clsx"

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  placeholder?: string
  value?: string
  onChangeValue: (value: string) => void
  searchValue: string
  className?: string
  mode: "add" | "search"
}

const Input: React.FC<InputProps> = ({
  onChangeValue,
  searchValue,
  value,
  placeholder,
  mode,
}) => {
  const onUpdateSearch = useCallback((str: string) => {
    onChangeValue(str)
  }, [])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSearch(event.target.value)
  }

  const modeClass = mode === "add" ? styles["add"] : styles["search"]

  return (
    <div className={styles.input}>
      <input
        value={value || searchValue}
        onChange={onChangeInput}
        className={clsx(styles.input__block, modeClass)}
        type="text"
        placeholder={placeholder ? `${placeholder}` : "Начните поиск..."}
      />
    </div>
  )
}

export default Input
