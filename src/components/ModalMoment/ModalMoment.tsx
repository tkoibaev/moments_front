import React from "react"
import styles from "./ModalMoment.module.scss"

import profile1 from "../../assets/mockImages/mockProfile1.jpg"
import profile2 from "../../assets/mockImages/mockProfile2.jpg"
import { Link } from "react-router-dom"
import LikeIcon from "../../components/Icons/LikeIcon"
import { Moment as MomentType } from "types"
import CommentsSection from "../../components/CommentsSection"
import CommentIcon from "../../components/Icons/CommentIcon"

interface MomentProps {
  moment: MomentType
}

const ModalMoment: React.FC<MomentProps> = ({ moment }) => {
  return (
    <div className={styles.moment}>
      <div className={styles.moment__content}>
        <img src={moment.image} alt="" />
      </div>
      <div className={styles.moment__forum}>
        <div className={styles.moment__forum_description}>
          <p>
            <span>{moment.author.login}</span>
            {moment.description}
          </p>
        </div>
        <div className={styles.moment__forum_comments}>
          <CommentsSection
            showAll={true}
            //   onMoreClick={() => setIsModally(true)}
            comments={moment.comments}
          />
        </div>

        <div className={styles.moment__forum_actions}>
          <LikeIcon width={30} height={30} />
          <CommentIcon width={26} height={26} />
        </div>
      </div>
    </div>
  )
}

export default ModalMoment
