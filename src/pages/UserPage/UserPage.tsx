import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./UserPage.module.scss"

import MomentsList from "../../components/MomentsList"
import Button from "../../components/Button"
import MomentsGridList from "../../components/MomentsGridList"
import GridIcon from "../../components/Icons/GridIcon"
import FeedIcon from "../../components/Icons/FeedIcon"
import { MyPage, VisitAuthor } from "../../consts"
import { useNavigate, useParams } from "react-router-dom"
import { Author, Moment, Profile, Subs } from "../../types"
import { AuthLogin } from "../../consts"
import ModalWindow from "../../components/ModalWindow"
import UsersList from "../../components/UsersList"
import AvatarComponent from "../../components/AvatarComponent"
import EditProfileForm from "../../components/EditProfileForm"
import EmptyMomentsGridList from "../../components/EmptyMomentsList"
import axios from "axios"
import { Response } from "../../types"
import { clearUser, useUserInfo } from "../../store/UserSlice"
import { useDispatch } from "react-redux"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const UserPage = () => {
  const [active, setActive] = useState<"feed" | "grid">("grid")
  const [isMyPage, setIsMyPage] = useState<boolean>(false)
  const [pageInfo, setPageInfo] = useState<Profile>()
  const loginUserInfo = useUserInfo() //инфа о залогиненом пользователе
  const [isSubscribersOpened, setIsSubscribersOpened] = useState(false)
  const [isSubscriptionsOpened, setIsSubscriptionsOpened] = useState(false)
  const [isEditsOpened, setIsEditsOpened] = useState(false)

  const [userInfo, setUserInfo] = useState<Author>()
  const [userSubscriptions, setUserSubscriptions] = useState<Subs[]>()
  const [userSubscribers, setUserSubscribers] = useState<Subs[]>()
  const [userMoments, setUserMoments] = useState<Moment[]>()
  const { userLogin } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUserInfo = async () => {
    try {
      const response: Response = await axios(
        `http://127.0.0.1:8000/api/user/${userLogin}/`,
        {
          method: "GET",
        }
      )
      console.log(response.data.user)
      setUserInfo(response.data.user)
      setUserSubscribers(response.data.subscribers)
      setUserSubscriptions(response.data.subscriptions)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserMoments = async () => {
    try {
      const response: Response = await axios(
        `http://127.0.0.1:8000/api/moments_by_user/${userLogin}/`,
        {
          method: "GET",
        }
      )
      setUserMoments(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      const response: Response = await axios(
        `http://localhost:8000/api/logout/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      dispatch(clearUser())
      cookies.remove("session_id", { path: "/" })
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    document.title = `${userLogin}`
    getUserInfo()
    getUserMoments()
    setIsMyPage(loginUserInfo?.username == userLogin)
  }, [userLogin, loginUserInfo])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pageInfo]) // !!! change logic

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <div className={styles.profile__main}>
          {userInfo?.avatar && (
            <AvatarComponent
              className={styles.profile__main_avatar}
              image={userInfo.avatar}
            />
          )}

          <div className={styles.profile__main_info}>
            <h1>{userInfo?.username}</h1>
            <ul className={styles.stats}>
              <li>
                <span style={{ fontWeight: 600 }}>{userMoments?.length}</span>{" "}
                публикаций
              </li>
              <li
                onClick={() => setIsSubscribersOpened(true)}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontWeight: 600 }}>
                  {userSubscribers?.length}
                </span>{" "}
                подписчиков
              </li>
              <li
                onClick={() => setIsSubscriptionsOpened(true)}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontWeight: 600 }}>
                  {userSubscriptions?.length}
                </span>{" "}
                подписок
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.profile__description}>{userInfo?.bio}</div>
        {isMyPage ? (
          <div className={styles.profile__action}>
            <Button onClick={() => setIsEditsOpened(true)} mode="passive">
              Редактировать
            </Button>
            <Button onClick={() => handleLogout()} mode="passive">
              Выйти
            </Button>
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
        {active == "grid" &&
          (userMoments?.length ? (
            <MomentsGridList moments={userMoments} />
          ) : (
            <EmptyMomentsGridList isMyPage={isMyPage} />
          ))}
        {active == "feed" &&
          (userMoments?.length ? (
            <MomentsList moments={userMoments} />
          ) : (
            <EmptyMomentsGridList isMyPage={isMyPage} />
          ))}
      </div>
      <ModalWindow
        active={isSubscribersOpened}
        handleBackdropClick={() => setIsSubscribersOpened(false)}
      >
        <UsersList users={userSubscribers} title="Подписчики" />
      </ModalWindow>
      <ModalWindow
        active={isSubscriptionsOpened}
        handleBackdropClick={() => setIsSubscriptionsOpened(false)}
      >
        <UsersList reverse={true} users={userSubscriptions} title="Подписки" />
      </ModalWindow>
      <ModalWindow
        active={isEditsOpened}
        handleBackdropClick={() => setIsEditsOpened(false)}
      >
        {userInfo && (
          <EditProfileForm
            onSubmitSuccess={() => setIsEditsOpened(false)}
            user={userInfo}
          />
        )}
      </ModalWindow>
    </div>
  )
}

export default UserPage
