import React, { useState } from "react"
import styles from "./MomentsGridList.module.scss"

import Moment from "../../components/Moment"
import { Moment as MomentsListType } from "types"
import ModalWindow from "../../components/ModalWindow"
import ModalMoment from "../../components/ModalMoment"

interface MomentsListProps {
  moments?: MomentsListType[]
}

const MomentsGridList: React.FC<MomentsListProps> = ({ moments }) => {
  const [isModally, setIsModally] = useState<boolean>(false)
  const [momentForClick, setMomentForClick] = useState<MomentsListType>()

  return (
    <>
      <div className={styles.container}>
        {moments ? (
          moments.map((moment) => (
            <img
              onClick={() => {
                setMomentForClick(moment), setIsModally(true)
              }}
              key={moment.id}
              src={moment.image}
              alt={`Moment by ${moment.author.login}`}
              className={styles.image}
            />
          ))
        ) : (
          <div>gecnjjjjjjjjjjjjjjjjjjjj</div>
        )}
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
