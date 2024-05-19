import React from "react"
import styles from "./DateTag.module.scss"
import { formatDistanceToNow, parseISO } from "date-fns"

export type DateTagProps = {
  date: string
}

const DateTag: React.FC<DateTagProps> = ({ date }) => {
  if (typeof date !== "string") {
    return null
  }

  const formattedDate = parseISO(date)

  const timeAgo = formatDistanceToNow(formattedDate)

  return <p className={styles.date}>{timeAgo}</p>
}

export default DateTag
