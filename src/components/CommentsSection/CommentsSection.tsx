import React from "react"
import styles from "./CommentsSection.module.scss"
import { Comment as CommentType } from "../../types"
import Comment from "../../components/Comment"

interface CommentsSectionProps {
  comments: CommentType[]
  onMoreClick?: () => void
  showAll?: boolean
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  onMoreClick,
  showAll,
}) => {
  const displayedComments = comments.slice(0, 3)
  return (
    <div className={styles.section}>
      {comments.length > 3 && !showAll ? (
        <div className="">
          {displayedComments.map((comment, index) => (
            <Comment
              key={index}
              date={comment.date}
              author={comment.author.login}
              content={comment.text}
              isDescription={false}
            />
          ))}
          <div onClick={onMoreClick} className={styles.comment__more}>
            Посмотреть все
          </div>
        </div>
      ) : (
        comments.map((comment, index) => (
          <Comment
            key={index}
            date={comment.date}
            author={comment.author.login}
            content={comment.text}
            isDescription={false}
          />
        ))
      )}
    </div>
  )
}

export default CommentsSection
