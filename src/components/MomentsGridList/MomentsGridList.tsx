import React, { useEffect, useState } from "react"
import styles from "./MomentsGridList.module.scss"

import { Moment as MomentsListType } from "types"
import ModalWindow from "../../components/ModalWindow"
import ModalMoment from "../../components/ModalMoment"
import { useParams } from "react-router-dom"
import EmptyMomentsGridList from "../EmptyMomentsList"

interface MomentsListProps {
  moments: MomentsListType[]
  isMyPage?: boolean
}

const MomentsGridList: React.FC<MomentsListProps> = ({ moments, isMyPage }) => {
  const [isModally, setIsModally] = useState<boolean>(false)
  const [momentForClick, setMomentForClick] = useState<MomentsListType>()
  const { userLogin } = useParams()

  useEffect(() => {
    setIsModally(false)
  }, [userLogin])

  return (
    <>
      <div className={styles.container}>
        {moments.map((moment) => (
          <img
            onClick={() => {
              setMomentForClick(moment), setIsModally(true)
            }}
            key={moment.id}
            src={moment.image}
            alt={`Moment by ${moment.image}`}
            className={styles.image}
          />
        ))}
      </div>

      <ModalWindow
        handleBackdropClick={() => {
          setIsModally(false)
        }}
        active={isModally}
      >
        {momentForClick && <ModalMoment moment={momentForClick} />}
      </ModalWindow>
    </>
  )
}

export default MomentsGridList
