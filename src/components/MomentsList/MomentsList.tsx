import React from "react"
import styles from "./MomentsList.module.scss"
import Moment from "../../components/Moment"
import { Moment as MomentsListType } from "types"

interface MomentsListProps {
  moments?: MomentsListType[]
  loading: boolean
}

const MomentsList: React.FC<MomentsListProps> = ({ moments, loading }) => {
  return (
    <div>
      {moments &&
        moments.map((moment) => (
          <Moment loading={loading} key={moment.id} moment={moment} />
        ))}
    </div>
  )
}

export default MomentsList
