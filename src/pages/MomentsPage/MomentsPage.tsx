import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./MomentsPage.module.scss"
import MomentsList from "../../components/MomentsList"
import axios from "axios"
import { Moment } from "../../types"
import { Response } from "../../types"

const MomentsPage = () => {
  const [moments, setMoments] = useState<Moment[]>()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getCategoryItems = async () => {
    try {
      const response: Response = await axios(
        `http://127.0.0.1:8000/api/moments/`,
        {
          method: "GET",
        }
      )
      console.log(response.data)
      setMoments(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    document.title = "Лента моментов"
    getCategoryItems()
  }, [])
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Лента моментов</h1>
      </div>
      <div className={styles.page__content}>
        <MomentsList moments={moments} />
      </div>
    </div>
  )
}

export default MomentsPage
