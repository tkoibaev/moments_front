import React from "react"
import styles from "./CommentsSection.module.scss"
import LikeIcon from "../../components/Icons/LikeIcon"
import { Link } from "react-router-dom"
import { Comment } from "../../types"
import DateTag from "../../components/DateTag"
import UserLogin from "../../components/UserLogin"

interface CommentsSectionProps {
  comments: Comment[]
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
            <div className={styles.comment} key={index}>
              <div className={styles.comment__info}>
                <UserLogin login={comment.author.login} /> {comment.text}
              </div>
              <div className={styles.comment__action}>
                <p>{comment.date}</p>
                <LikeIcon width={25} height={25} />
              </div>
            </div>
          ))}
          <div onClick={onMoreClick} className={styles.comment__more}>
            Посмотреть все
          </div>
        </div>
      ) : (
        comments.map((comment, index) => (
          <div className={styles.comment} key={index}>
            <div className={styles.comment__info}>
              <UserLogin login={comment.author.login} /> {comment.text}
            </div>
            <div className={styles.comment__action}>
              <DateTag date={comment.date} />
              <LikeIcon width={25} height={25} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentsSection
