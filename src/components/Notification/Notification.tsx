import React from "react"
import styles from "./Notification.module.scss"
import AvatarComponent from "../../components/AvatarComponent"
import UserLogin from "../../components/UserLogin"
import DateTag from "../../components/DateTag"
import Button from "../../components/Button"

export type NotofocationProps = {
  type: string
  author_login: string
  author_avatar: string
  date: string
  post_image?: string
}

const Notification: React.FC<NotofocationProps> = ({
  type,
  author_login,
  author_avatar,
  date,
  post_image,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.item_desc}>
        <AvatarComponent className={styles.item_avatar} image={author_avatar} />
        <div>
          <UserLogin login={author_login} />
          {type == "like" ? <p>Оценил Ваше фото</p> : <p>Подписался на Вас</p>}
          <DateTag date={date} />
        </div>
      </div>
      {type == "like" ? (
        <div className={styles.item_post}>
          <img src={post_image} />
        </div>
      ) : (
        <Button className={styles.item_btn} mode="active">
          Подписаться
        </Button>
      )}
    </li>
  )
}

export default Notification
