import styles from "./NotificationsPage.module.scss"
import { Notifications } from "../../consts"
import NotificationsList from "../../components/NotificationsList"
import { useEffect } from "react"

const NotificationsPage = () => {
  useEffect(() => {
    document.title = "Уведомления"
  }, [])
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Уведомления</h1>
      </div>
      <NotificationsList notifications={Notifications} />
    </div>
  )
}

export default NotificationsPage
