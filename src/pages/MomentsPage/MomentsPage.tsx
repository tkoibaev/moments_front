import React from "react"
import styles from "./MomentsPage.module.scss"
import LogoIcon from "../../components/Icons/LogoIcon"
import Moment from "../../components/Moment"

const MomentsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Лента моментов</h1>
      </div>
      <div className={styles.page__content}>
        <Moment />
        <Moment />
        <Moment />
        <Moment />
      </div>
    </div>
  )
}

export default MomentsPage
