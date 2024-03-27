import React from "react"
import styles from "./NotificationsList.module.scss"
import { Notification } from "../../types"
import Button from "../../components/Button"
import AvatarComponent from "../../components/AvatarComponent"
import UserLogin from "../../components/UserLogin"
import DateTag from "../../components/DateTag"

export type NotificationsListProps = {
  notifications: Notification[]
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {notifications.map((notification) =>
          notification.type == "like" ? (
            <li className={styles.list__item}>
              <div className={styles.list__item_desc}>
                <AvatarComponent size={80} image={notification.author.avatar} />
                <div>
                  <UserLogin login={notification.author.login} />
                  <p>Оценил Ваше фото</p>
                  <DateTag date={notification.date} />
                </div>
              </div>
              <div className={styles.list__item_post}>
                <img src={notification.post?.image} />
              </div>
            </li>
          ) : (
            <li className={styles.list__item}>
              <div className={styles.list__item_desc}>
                <AvatarComponent size={80} image={notification.author.avatar} />
                <div>
                  <UserLogin login={notification.author.login} />
                  <p>Подписался на Вас</p>
                  <DateTag date={notification.date} />
                </div>
              </div>
              <Button className={styles.list__item_btn} mode="active">
                Подписаться
              </Button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default NotificationsList
