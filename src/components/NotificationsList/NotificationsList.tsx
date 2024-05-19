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
          {notifications.map((notification, index) => (
            <Notification key={index} notification={notification} />
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
