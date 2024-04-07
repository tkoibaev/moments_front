import React from "react"
import styles from "./NotificationsList.module.scss"
import { Notification as NotificationType } from "../../types"

import Notification from "../../components/Notification"

export type NotificationsListProps = {
  notifications: NotificationType[]
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {notifications.map((notification) => (
          <Notification
            type={notification.type}
            author_login={notification.author.login}
            author_avatar={notification.author.avatar}
            date={notification.date}
            post_image={
              notification.type == "like" ? notification.post?.image : undefined
            }
          />
        ))}
      </ul>
    </div>
  )
}

export default NotificationsList
