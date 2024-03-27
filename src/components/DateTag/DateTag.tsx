import React from "react"
import styles from "./DateTag.module.scss"

export type DateTagProps = {
  date: string
}

const DateTag: React.FC<DateTagProps> = ({ date }) => {
  return <p className={styles.date}> {date}</p>
}

export default DateTag
