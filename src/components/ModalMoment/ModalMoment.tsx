import React, { useState } from "react"
import styles from "./ModalMoment.module.scss"

import { Moment as MomentType } from "types"
import CommentsSection from "../../components/CommentsSection"

import Comment from "../../components/Comment"
import Input from "../../components/Input"
import AddCommentIcon from "../../components/Icons/AddCommentIcon"
import axios from "axios"
import { toast } from "react-toastify"
import { Response } from "../../types"

interface MomentProps {
  moment: MomentType
}

const ModalMoment: React.FC<MomentProps> = ({ moment }) => {
  const [inputValue, setInputValue] = useState("")
  const [curMoment, setCurMoment] = useState<MomentType>(moment)

  const handleInputChange = (value: string) => {
    setInputValue(value)
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

  return (
    <div className={styles.moment}>
      <div className={styles.moment__desc}>
        <Comment
          id={curMoment.id}
          author={curMoment.author.username}
          content={curMoment.description}
          isDescription={true}
          tags={curMoment.tags}
          onLikeClick={() => console.log()}
        />
      </div>

      <div className={styles.moment__forum}>
        <div className={styles.moment__forum_comments}>
          <CommentsSection
            onLikeClick={(commentId) => likeComment(commentId)}
            showAll={true}
            comments={curMoment.comments}
          />
        </div>

        <div className={styles.moment__forum_actions}>
          <Input
            mode="add"
            onChangeValue={handleInputChange}
            value={inputValue}
            placeholder="Оставьте комментарий"
            searchValue={inputValue}
          />
          <AddCommentIcon onClick={addComment} width={30} height={30} />
        </div>
      </div>
    </div>
  )
}

export default ModalMoment
