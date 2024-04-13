import React from "react"
import styles from "./TagComponent.module.scss"
import { useNavigate } from "react-router-dom"
import { Tag } from "../../types"

export type TagComponentProps = {
  tag: Tag
}

const TagComponent: React.FC<TagComponentProps> = ({ tag }) => {
  const navigate = useNavigate()

  const handleClick = (value: string) => {
    navigate(`/search?tag=${value}`)
  }

  return (
    <span className={styles.tag} onClick={() => handleClick(tag.title)}>
      #{tag.title}
    </span>
  )
}

export default TagComponent
