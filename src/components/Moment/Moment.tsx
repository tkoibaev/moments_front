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
import axios from "axios"
import { toast } from "react-toastify"
import { Response } from "../../types"
import MomentSkeleton from "../../components/MomentSkeleton"

interface MomentProps {
  moment: MomentType
  loading?: boolean
}

const Moment: React.FC<MomentProps> = ({ moment, loading }) => {
  const [isModally, setIsModally] = useState<boolean>(false)
  const [isLikesOpen, setIsLikesOpen] = useState<boolean>(false)
  const [curMoment, setCurMoment] = useState<MomentType>(moment)
  const [isLiked, setIsLiked] = useState<boolean>()

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  const likeMoment = async () => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/toggle_moment_like/${moment.id}/`,

        {
          method: "POST",
          withCredentials: true,
        }
      )

      console.log("ДОБАВИЛ ЛАЙК")
      getMoment()
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error)
      toast.error(
        "Ошибка при отправке запроса. Проверьте соединение с интернетом."
      )
    }
  }

  const likeComment = async (comment_id: number) => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/toggle_comment_like/${comment_id}/`,

        {
          method: "POST",
          withCredentials: true,
        }
      )

      console.log("ДОБАВИЛ ЛАЙК")
      getMoment()
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error)
      toast.error(
        "Ошибка при отправке запроса. Проверьте соединение с интернетом."
      )
    }
  }

  const addComment = async () => {
    try {
      const response: Response = await axios.post(
        `http://localhost:8000/api/add_comment/${moment.id}/`,
        {
          content: inputValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      console.log("Комментарий добавлен")
      setInputValue("")
      getMoment()
    } catch (error) {
      console.error("Ошибка при отправке комментария:", error)
      toast.error(
        "Ошибка при отправке комментария. Проверьте соединение с интернетом."
      )
    }
  }

  const getMoment = async () => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/moment/${curMoment.id}/`,
        {
          method: "GET",
          withCredentials: true,
        }
      )
      console.log(response.data)
      setCurMoment(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (
        [...new Array(6)].map((_, index) => (
          <MomentSkeleton className={styles.moment} key={index} />
        ))
      ) : (
        <div className={styles.moment}>
          <div className={styles.moment__header}>
            <AvatarComponent
              className={styles.moment__header_avatar}
              image={curMoment.author.avatar}
            />
            <UserLogin login={curMoment.author.username} />
            <DateTag date={curMoment.date_created} />
          </div>

          <div className={styles.moment__content}>
            <img src={`http://localhost:8000/${curMoment.image}`} alt="" />
          </div>
          <div className={styles.moment__actions}>
            <LikeIcon
              isActive={curMoment.liked_by_current_user}
              onClick={() => likeMoment()}
              width={30}
              height={30}
            />
            <CommentIcon width={26} height={26} />
          </div>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => setIsLikesOpen(true)}
          >
            {curMoment.likes.length} отметок "Нравится"
          </h4>
          <Comment
            id={curMoment.id}
            author={curMoment.author.username}
            content={curMoment.description}
            isDescription={true}
            tags={curMoment.tags}
            onLikeClick={() => console.log()}
          />

          <div className={styles.moment__comments}>
            <CommentsSection
              showAll={false}
              onMoreClick={() => setIsModally(true)}
              comments={curMoment.comments}
              onLikeClick={(commentId) => likeComment(commentId)}
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
            <AddCommentIcon onClick={addComment} width={30} height={30} />
          </div>

          <ModalWindow
            handleBackdropClick={() => {
              setIsModally(false)
            }}
            active={isModally}
          >
            <ModalMoment moment={curMoment} />
          </ModalWindow>

          <ModalWindow
            handleBackdropClick={() => {
              setIsLikesOpen(false)
            }}
            active={isLikesOpen}
          >
            <UsersList reverse={true} users={curMoment.likes} title="Оценили" />
          </ModalWindow>
        </div>
      )}
    </>
  )
}

export default Moment
