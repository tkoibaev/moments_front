import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./MomentsPage.module.scss"
import MomentsList from "../../components/MomentsList"
import axios from "axios"
import { Moment } from "../../types"
import { Response } from "../../types"

const MomentsPage = () => {
  const [moments, setMoments] = useState<Moment[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [fetching, setFetching] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true)
    }
  }

  const getMoments = async () => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/moments?page=${currentPage}`,
        {
          method: "GET",
          withCredentials: true,
        }
      )
      console.log(response.data)
      setMoments([...moments, ...response.data])
      setCurrentPage((s) => s + 1)
      setFetching(false)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (fetching) {
      getMoments()
    }
  }, [fetching])

  useEffect(() => {
    document.title = "Лента моментов"
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Лента моментов</h1>
      </div>
      <div className={styles.page__content}>
        <MomentsList loading={loading} moments={moments} />
      </div>
    </div>
  )
}

export default MomentsPage
