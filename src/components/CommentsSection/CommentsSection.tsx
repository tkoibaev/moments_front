import React from "react"
import styles from "./CommentsSection.module.scss"
import { Comment as CommentType } from "../../types"
import Comment from "../../components/Comment"

interface CommentsSectionProps {
  comments: CommentType[]
  onMoreClick?: () => void
  showAll?: boolean
  onLikeClick: (commentId: number) => void
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  onMoreClick,
  showAll,
  onLikeClick,
}) => {
  const displayedComments = comments.slice(0, 3)
  return (
    <div className={styles.section}>
      {comments.length > 3 && !showAll ? (
        <div className="">
          {displayedComments.map((comment, index) => (
            <Comment
              key={index}
              id={comment.id}
              date={comment.date}
              isLiked={comment.liked_by_current_user}
              author={comment.author.username}
              content={comment.content}
              isDescription={false}
              onLikeClick={(commentId) => onLikeClick(commentId)}
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
            id={comment.id}
            isLiked={comment.liked_by_current_user}
            date={comment.date}
            author={comment.author.username}
            content={comment.content}
            isDescription={false}
            onLikeClick={(commentId) => onLikeClick(commentId)}
          />
        ))
      )}
    </div>
  )
}

export default CommentsSection
