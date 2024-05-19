import { useEffect, useState } from "react"
import styles from "./SearchPage.module.scss"
import { Moments } from "../../consts"
import MomentsGridList from "../../components/MomentsGridList"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Author, Moment } from "../../types"
import axios from "axios"
import { Response } from "../../types"
import UsersSearchList from "../../components/UsersSearchList"

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  //   const [searchParams] = useSearchParams()
  const [usersList, setUsersList] = useState<Author[]>()
  const [momentsList, setMomentsList] = useState<Moment[]>()

  const queryParameters = new URLSearchParams(window.location.search)

  useEffect(() => {
    const tag = queryParameters.get("value")
    if (tag) {
      setSearchValue(tag)
    }
    handleSearch()
  }, [])

  const searchUsers = async () => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/users?search=${searchValue}`,
        {
          method: "GET",
          withCredentials: true,
        }
      )
      setUsersList(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const searchMomentsByTags = async () => {
    try {
      console.log(searchValue)
      const response: Response = await axios(
        `http://localhost:8000/api/moments/tag?search=${searchValue}`,
        {
          method: "GET",
          withCredentials: true,
        }
      )
      setMomentsList(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = () => {
    searchUsers()
    searchMomentsByTags()
  }

  useEffect(() => {
    document.title = "Поиск"
  }, [])

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value)
  }
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Поиск</h1>
      </div>
      <div className={styles.page__content}>
        <div className={styles.page__content_start}>
          <h1>Вдохновляйтесь!</h1>
          <p>Ищите других людей или моменты, используя поиск по тегам.</p>
        </div>

        <div className={styles.page__content_search}>
          <Input
            mode="search"
            onChangeValue={handleSearchInputChange}
            value={searchValue}
            placeholder="Введите имя пользователя или тег"
            searchValue={searchValue}
            className={styles.page__content_search_input}
          />
          <Button
            onClick={handleSearch}
            mode="active"
            className={styles.page__content_search_btn}
          >
            Поиск
          </Button>
        </div>
        {usersList && usersList.length > 0 ? (
          <UsersSearchList users={usersList} />
        ) : (
          <h3>Пользователей не найдено</h3>
        )}

        {momentsList && <MomentsGridList moments={momentsList} />}
      </div>
    </div>
  )
}

export default SearchPage
