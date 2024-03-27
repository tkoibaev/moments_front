import React from "react"
import styles from "./AddMomentPage.module.scss"
import Uploader from "../../components/Uploader"

const AddMomentPage = () => {
  return (
    <div className={styles.page}>
      <Uploader />
    </div>
  )
}

export default AddMomentPage
