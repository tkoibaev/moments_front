import React, { useState } from "react"
import styles from "./ModalMoment.module.scss"

import profile1 from "../../assets/mockImages/mockProfile1.jpg"
import profile2 from "../../assets/mockImages/mockProfile2.jpg"
import { Link } from "react-router-dom"
import LikeIcon from "../../components/Icons/LikeIcon"
import { Moment as MomentType } from "types"
import CommentsSection from "../../components/CommentsSection"
import CommentIcon from "../../components/Icons/CommentIcon"
import Comment from "../../components/Comment"
import Input from "../../components/Input"
import AddCommentIcon from "../../components/Icons/AddCommentIcon"

interface MomentProps {
  moment: MomentType
}

const ModalMoment: React.FC<MomentProps> = ({ moment }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <div className={styles.moment}>
      <div className="">
        <Comment
          author={moment.author.login}
          content={moment.description}
          isDescription={true}
          tags={moment.tags}
        />
      </div>

      <div className={styles.moment__forum}>
        <div className={styles.moment__forum_comments}>
          <CommentsSection showAll={true} comments={moment.comments} />
        </div>

        <div className={styles.moment__forum_actions}>
          <Input
            mode="add"
            onChangeValue={handleInputChange}
            value={inputValue}
            placeholder="Оставьте комментарий"
            searchValue={inputValue}
          />
          <AddCommentIcon width={30} height={30} />
        </div>
      </div>
    </div>
  )
}

export default ModalMoment
