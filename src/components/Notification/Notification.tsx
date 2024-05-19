import React from "react"
import styles from "./Notification.module.scss"
import AvatarComponent from "../../components/AvatarComponent"
import UserLogin from "../../components/UserLogin"
import DateTag from "../../components/DateTag"
import Button from "../../components/Button"
import { Notification as NotificationType } from "../../types"
import { Link } from "react-router-dom"

export type NotifocationProps = {
  notification: NotificationType
}

const Notification: React.FC<NotifocationProps> = ({ notification }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item_desc}>
        {notification.type == "subscribe" ? (
          <AvatarComponent
            className={styles.item_avatar}
            image={notification.target.subscriber.avatar}
          />
        ) : (
          <AvatarComponent
            className={styles.item_avatar}
            image={notification.target.author.avatar}
          />
        )}
        <div>
          {notification.type == "subscribe" ? (
            <UserLogin login={notification.target.subscriber.username} />
          ) : (
            <UserLogin login={notification.target.author.username} />
          )}
          {notification.type == "like" ? (
            <p>Оценил Ваше фото</p>
          ) : notification.type == "subscribe" ? (
            <p>Подписался на Вас</p>
          ) : (
            <p>Прокоментировал Ваш момент</p>
          )}
          <DateTag date={notification.timestamp} />
        </div>
      </div>
      {notification.type == "like" || notification.type == "comment" ? (
        <div className={styles.item_post}>
          <img src={`http://localhost:8000/${notification.moment_image}`} />
        </div>
      ) : (
        <Link to={`/${notification.target.subscriber.username}`}>
          <Button className={styles.item_btn} mode="active">
            Перейти в профиль
          </Button>
        </Link>
      )}
    </li>
  )
}

export default Notification
