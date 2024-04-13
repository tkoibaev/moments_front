import React, { useEffect } from "react"
import styles from "./AddMomentPage.module.scss"
import Uploader from "../../components/Uploader"

const AddMomentPage = () => {
  useEffect(() => {
    document.title = "Создание момента"
  }, [])
  return (
    <div className={styles.page}>
      <Uploader />
    </div>
  )
}

export default AddMomentPage
