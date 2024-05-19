import React from "react"
import styles from "./Comment.module.scss"
import LikeIcon from "../../components/Icons/LikeIcon"
import UserLogin from "../../components/UserLogin"
import { Tag } from "../../types"
import TagComponent from "../../components/TagComponent"
import DateTag from "../../components/DateTag"

export type CommentProps = {
  author: string
  id: number
  content: string
  date?: string
  isDescription: boolean
  tags?: Tag[]
  isLiked?: boolean
  onLikeClick: (commentId: number) => void
}

const Comment: React.FC<CommentProps> = ({
  author,
  content,
  date,
  isDescription,
  tags,
  id,
  onLikeClick,
  isLiked,
}) => {
  return (
    <div className={styles.comment}>
      <div
        style={isDescription ? { width: "100%" } : { width: "80%" }}
        className={styles.comment__info}
      >
        <UserLogin login={author} />
        <span> {content}</span>
        {tags && tags.map((tag) => <TagComponent key={tag.id} tag={tag} />)}
      </div>
      {!isDescription && (
        <div className={styles.comment__action}>
          {date && <DateTag date={date} />}

          <LikeIcon
            isActive={isLiked}
            onClick={() => onLikeClick(id)}
            width={25}
            height={25}
          />
        </div>
      )}
    </div>
  )
}

export default Comment
