import React from "react"
import styles from "./CommentsSection.module.scss"
import LikeIcon from "../../components/Icons/LikeIcon"

interface Comment {
  id: number
  author: string
  text: string
  date: string
}

interface CommentsSectionProps {
  comments: Comment[]
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  const displayedComments = comments.slice(0, 3)
  return (
    <div className={styles.section}>
      {comments.length > 3 ? (
        <div className="">
          {displayedComments.map((comment, index) => (
            <div className={styles.comment} key={index}>
              <div className={styles.comment__info}>
                <h4>{comment.author}</h4> {comment.text}
              </div>
              <div className={styles.comment__action}>
                <p>{comment.date}</p>
                <LikeIcon width={25} height={25} />
              </div>
            </div>
          ))}
          <div className={styles.comment__more}>Посмотреть все</div>
        </div>
      ) : (
        comments.map((comment, index) => (
          <div className={styles.comment} key={index}>
            <div className={styles.comment__info}>
              <h4>{comment.author}</h4> {comment.text}
            </div>
            <div className={styles.comment__action}>
              <p>{comment.date}</p>
              <LikeIcon width={25} height={25} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentsSection
