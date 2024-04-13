import React from "react"
import styles from "./NotificationsList.module.scss"
import { Notification as NotificationType } from "../../types"

import Notification from "../../components/Notification"
import NotificationIcon from "../../components/Icons/NotificationIcon"

export type NotificationsListProps = {
  notifications: NotificationType[]
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
}) => {
  return (
    <div className={styles.container}>
      {notifications.length != 0 ? (
        <ul className={styles.list}>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              type={notification.type}
              author_login={notification.author.login}
              author_avatar={notification.author.avatar}
              date={notification.date}
              post_image={
                notification.type == "like"
                  ? notification.post?.image
                  : undefined
              }
            />
          ))}
        </ul>
      ) : (
        <div className={styles.mock}>
          <NotificationIcon className={styles.mock__icon} />
          <h2 className={styles.mock__desc}>
            У Вас пока нет взаимодействий с другими пользователями
          </h2>
        </div>
      )}
    </div>
  )
}

export default NotificationsList
