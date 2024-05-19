import styles from "./NotificationsPage.module.scss"
import { Notifications } from "../../consts"
import NotificationsList from "../../components/NotificationsList"
import { useEffect, useState } from "react"
import { Notification } from "../../types"
import axios from "axios"
import { Response } from "../../types"

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>()

  const getNotifications = async () => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/get_notifications/`,
        {
          method: "GET",
          withCredentials: true,
        }
      )
      console.log(response.data)
      setNotifications(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    document.title = "Уведомления"
    getNotifications()
  }, [])
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Уведомления</h1>
      </div>
      {notifications && <NotificationsList notifications={notifications} />}
    </div>
  )
}

export default NotificationsPage
