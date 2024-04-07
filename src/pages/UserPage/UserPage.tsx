import React, { useEffect, useLayoutEffect, useState } from "react"
import styles from "./UserPage.module.scss"

import mockImage from "../../assets/mockImages/mockProfile1.jpg"
import MomentsList from "../../components/MomentsList"
import Button from "../../components/Button"
import profile2 from "../../assets/mockImages/mockProfile2.jpg"
import MomentsGridList from "../../components/MomentsGridList"
import GridIcon from "../../components/Icons/GridIcon"
import FeedIcon from "../../components/Icons/FeedIcon"
import { MyPage, VisitAuthor } from "../../consts"
import { useParams } from "react-router-dom"
import { Profile } from "../../types"
import { AuthLogin } from "../../consts"
import ModalWindow from "../../components/ModalWindow"
import UsersList from "../../components/UsersList"
import AvatarComponent from "../../components/AvatarComponent"

const UserPage = () => {
  const [active, setActive] = useState<"feed" | "grid">("grid")
  const [isMyPage, setIsMyPage] = useState<boolean>(false)
  const [pageInfo, setPageInfo] = useState<Profile>()

  const [isSubscribersOpened, setIsSubscribersOpened] = useState(false)
  const [isSubscriptionsOpened, setIsSubscriptionsOpened] = useState(false)

  const { userLogin } = useParams()

  useEffect(() => {
    setIsSubscriptionsOpened(false)
    setIsSubscribersOpened(false)
    if (userLogin === AuthLogin) {
      setPageInfo(MyPage)
      setIsMyPage(true)
    } else {
      setPageInfo(VisitAuthor)
    }
  }, [userLogin])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pageInfo]) // !!! change logic

  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <div className={styles.profile__main}>
          {pageInfo?.avatar && (
            <AvatarComponent
              className={styles.profile__main_avatar}
              image={pageInfo?.avatar}
            />
          )}

          <div className={styles.profile__main_info}>
            <h1>{pageInfo?.login}</h1>
            <ul className={styles.stats}>
              <li>
                <span style={{ fontWeight: 600 }}>
                  {pageInfo?.posts.length}
                </span>{" "}
                публикаций
              </li>
              <li
                onClick={() => setIsSubscribersOpened(true)}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontWeight: 600 }}>
                  {pageInfo?.subscribers.length}
                </span>{" "}
                подписчиков
              </li>
              <li
                onClick={() => setIsSubscriptionsOpened(true)}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontWeight: 600 }}>
                  {pageInfo?.subscriptions.length}
                </span>{" "}
                подписок
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.profile__description}>{pageInfo?.about}</div>
        {isMyPage ? (
          <div className={styles.profile__action}>
            <Button mode="passive">Редактировать</Button>
          </div>
        ) : (
          <div className={styles.profile__action}>
            <Button mode="active">Подписаться</Button>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.content__display}>
          <GridIcon
            isActive={active == "grid"}
            onClick={() => setActive("grid")}
            width={25}
            height={25}
          />
          <FeedIcon
            isActive={active == "feed"}
            onClick={() => setActive("feed")}
            width={25}
            height={25}
          />
        </div>
        {active == "grid" && <MomentsGridList moments={pageInfo?.posts} />}
        {active == "feed" && <MomentsList moments={pageInfo?.posts} />}
      </div>
      <ModalWindow
        active={isSubscribersOpened}
        handleBackdropClick={() => setIsSubscribersOpened(false)}
      >
        <UsersList users={pageInfo?.subscribers} title="Подписчики" />
      </ModalWindow>
      <ModalWindow
        active={isSubscriptionsOpened}
        handleBackdropClick={() => setIsSubscriptionsOpened(false)}
      >
        <UsersList users={pageInfo?.subscriptions} title="Подписки" />
      </ModalWindow>
    </div>
  )
}

export default UserPage
