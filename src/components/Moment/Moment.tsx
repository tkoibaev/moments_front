import React, { useState } from "react"
import styles from "./Moment.module.scss"
import LikeIcon from "../../components/Icons/LikeIcon"
import CommentIcon from "../../components/Icons/CommentIcon"
import CommentsSection from "../../components/CommentsSection"
import { Moment as MomentType } from "types"
import { Link } from "react-router-dom"
import ModalWindow from "../../components/ModalWindow"
import ModalMoment from "../../components/ModalMoment"
import Input from "../../components/Input"
import AddCommentIcon from "../../components/Icons/AddCommentIcon"
import AvatarComponent from "../../components/AvatarComponent"
import UserLogin from "../../components/UserLogin"
import DateTag from "../../components/DateTag"
import UsersList from "../../components/UsersList"
import Comment from "../../components/Comment"

interface MomentProps {
  moment: MomentType
}

const Moment: React.FC<MomentProps> = ({ moment }) => {
  const [isModally, setIsModally] = useState<boolean>(false)
  const [isLikesOpen, setIsLikesOpen] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <div className={styles.moment}>
      <div className={styles.moment__header}>
        <AvatarComponent
          className={styles.moment__header_avatar}
          image={moment.author.avatar}
        />
        <UserLogin login={moment.author.username} />
        <DateTag date={moment.date} />
      </div>

      <div className={styles.moment__content}>
        <img src={moment.image} alt="" />
      </div>
      <div className={styles.moment__actions}>
        <LikeIcon width={30} height={30} />
        <CommentIcon width={26} height={26} />
      </div>
      <h4 style={{ cursor: "pointer" }} onClick={() => setIsLikesOpen(true)}>
        {moment.likes.length} отметок "Нравится"
      </h4>
      <Comment
        author={moment.author.username}
        content={moment.description}
        isDescription={true}
        tags={moment.tags}
      />

      <div className={styles.moment__comments}>
        <CommentsSection
          showAll={false}
          onMoreClick={() => setIsModally(true)}
          comments={moment.comments}
        />
      </div>
      <div className={styles.moment__adding}>
        <Input
          mode="add"
          onChangeValue={handleInputChange}
          value={inputValue}
          placeholder="Оставьте комментарий"
          searchValue={inputValue}
        />
        <AddCommentIcon width={30} height={30} />
      </div>

      <ModalWindow
        handleBackdropClick={() => {
          setIsModally(false)
        }}
        active={isModally}
      >
        <ModalMoment moment={moment} />
      </ModalWindow>

      <ModalWindow
        handleBackdropClick={() => {
          setIsLikesOpen(false)
        }}
        active={isLikesOpen}
      >
        <UsersList users={moment.likes} title="Оценили" />
      </ModalWindow>
    </div>
  )
}

export default Moment
