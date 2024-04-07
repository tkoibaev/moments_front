import React from "react"
import styles from "./Comment.module.scss"
import LikeIcon from "../../components/Icons/LikeIcon"
import UserLogin from "../../components/UserLogin"
import { Tag } from "../../types"
import TagComponent from "../../components/TagComponent"
import DateTag from "../../components/DateTag"

export type CommentProps = {
  author: string
  content: string
  date?: string
  isDescription: boolean
  tags?: Tag[]
}

const Comment: React.FC<CommentProps> = ({
  author,
  content,
  date,
  isDescription,
  tags,
}) => {
  return (
    <div className={styles.comment}>
      <div
        style={isDescription ? { width: "100%" } : { width: "80%" }}
        className={styles.comment__info}
      >
        <UserLogin login={author} />
        <span> {content}</span>
        {tags && tags.map((tag) => <TagComponent tag={tag} />)}
      </div>
      {!isDescription && (
        <div className={styles.comment__action}>
          {date && <DateTag date={date} />}

          <LikeIcon width={25} height={25} />
        </div>
      )}
    </div>
  )
}

export default Comment
