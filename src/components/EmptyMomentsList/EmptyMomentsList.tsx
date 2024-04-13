import React from "react"
import styles from "./EmptyMomentsList.module.scss"
import EmptyGalleryIcon from "../Icons/EmptyGalleryIcon"
import { Link } from "react-router-dom"

export type EmptyMomentsListProps = {
  isMyPage?: boolean
}

const EmptyMomentsList: React.FC<EmptyMomentsListProps> = ({ isMyPage }) => {
  return (
    <div className={styles.mock}>
      <EmptyGalleryIcon className={styles.mock__icon} />
      {isMyPage ? (
        <div className={styles.mock__desc}>
          <h2>Добавьте момент</h2>
          <h4>Вы еще не опубликовали ни одного момента</h4>
          <Link to="/create">Поделитесь своим первым фото</Link>
        </div>
      ) : (
        <div className={styles.mock__desc}>
          <h2>Пользователь еще не опубликовал ни одного момента</h2>
        </div>
      )}
    </div>
  )
}

export default EmptyMomentsList
