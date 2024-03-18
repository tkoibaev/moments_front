import React from "react"
import styles from "./Moment.module.scss"
import profile from "../../assets/mockImages/mockProfile.jpg"
import LikeIcon from "../../components/Icons/LikeIcon"
import CommentIcon from "../../components/Icons/CommentIcon"
import CommentsSection from "../../components/CommentsSection"

type Props = {}

const mockMoment = {
  id: 1,
  author: {
    id: 1,
    name: "somebody",
    image: profile,
  },
  image: profile,
  date: "1 year ago",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosa at omnis autem, ab, error minus voluptatum voluptate fugit accusamus impedit unde labore tempore saepe vitae similique fuga harum asperiores!",
  comments: [
    {
      id: 1,
      author: "someone",
      text: "lalalalalala llaalalla",
      date: "1h",
    },
    {
      id: 2,
      author: "someone",
      text: "Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      date: "1h",
    },
    {
      id: 3,
      author: "someone",
      text: "lalalalalalallaalalla",
      date: "1h",
    },
    {
      id: 3,
      author: "someone",
      text: "lalalalalalallaalalla  lalalalalalallaalalla lalalalalalallaalalla",
      date: "1h",
    },
    {
      id: 3,
      author: "someone",
      text: "lalalalalalallaalalla lalalalalalallaalalla lalalalalalallaalalla",
      date: "1h",
    },
  ],
}

const Moment = (props: Props) => {
  return (
    <div className={styles.moment}>
      <div className={styles.moment__header}>
        <img src={mockMoment.author.image} alt="" />
        <h3>{mockMoment.author.name}</h3>
        <p>{mockMoment.date}</p>
      </div>
      <div className={styles.moment__content}>
        <img src={mockMoment.image} alt="" />
      </div>
      <div className={styles.moment__actions}>
        <LikeIcon width={30} height={30} />
        <CommentIcon width={26} height={26} />
      </div>
      <div className={styles.moment__description}>
        <p>
          <span>{mockMoment.author.name}</span>
          {mockMoment.description}
        </p>
      </div>
      <div className={styles.moment__comments}>
        <CommentsSection comments={mockMoment.comments} />
      </div>
    </div>
  )
}

export default Moment
