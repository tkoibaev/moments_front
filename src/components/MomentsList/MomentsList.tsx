import React from "react"
import styles from "./MomentsList.module.scss"
import Moment from "../../components/Moment"
import { Moment as MomentsListType } from "types"

interface MomentsListProps {
  moments?: MomentsListType[]
}

const MomentsList: React.FC<MomentsListProps> = ({ moments }) => {
  return (
    <div>
      {moments ? (
        moments.map((moment) => <Moment key={moment.id} moment={moment} />)
      ) : (
        <div>gecnjjjjjjjjjjjjjjjjj</div> //!!! обработать пустоту
      )}
    </div>
  )
}

export default MomentsList
