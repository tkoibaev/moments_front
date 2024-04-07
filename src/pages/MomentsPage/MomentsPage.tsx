import { useLayoutEffect } from "react"
import styles from "./MomentsPage.module.scss"
import MomentsList from "../../components/MomentsList"

import { Moments } from "../../consts"

const MomentsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Лента моментов</h1>
      </div>
      <div className={styles.page__content}>
        <MomentsList moments={Moments} />
      </div>
    </div>
  )
}

export default MomentsPage
