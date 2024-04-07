import { useEffect, useState } from "react"
import styles from "./SearchPage.module.scss"
import { Moments } from "../../consts"
import MomentsGridList from "../../components/MomentsGridList"
import Input from "../../components/Input"

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  //   const [searchParams] = useSearchParams()
  const queryParameters = new URLSearchParams(window.location.search)

  useEffect(() => {
    const tag = queryParameters.get("tag")
    if (tag) {
      setSearchValue(tag)
    }
    console.log(tag)
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
        <Input
          mode="search"
          onChangeValue={handleSearchInputChange}
          value={searchValue}
          placeholder="Введите имя пользователя или #тег"
          searchValue={searchValue}
          className={styles.page__content_search}
        />
        <MomentsGridList moments={Moments} />
      </div>
    </div>
  )
}

export default SearchPage
