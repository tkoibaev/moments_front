import React from "react"
import styles from "./Header.module.scss"
import LogoIcon from "../../components/Icons/LogoIcon"
import HomeIcon from "../../components/Icons/HomeIcon"
import LikeIcon from "../../components/Icons/LikeIcon"
import SearchIcon from "../../components/Icons/SearchIcon"
import AddIcon from "../../components/Icons/AddIcon"
import ProfileIcon from "../../components/Icons/ProfileIcon"
import { NavLink, useLocation } from "react-router-dom"
import { AuthLogin } from "../../consts"
import { useDispatch, useSelector } from "react-redux"
import clsx from "clsx"
import { useUserInfo } from "../../store/UserSlice"

export type HeaderProps = {
  className: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const userInfo = useUserInfo()
  const location = useLocation()
  if (location.pathname === "/login") {
    return null
  }
  return (
    <div className={clsx(styles["header"], className)}>
      <div className={styles.header__inner}>
        <NavLink to="/">
          <div className={styles.header__logo}>
            <h2>MOMENTS</h2>

            <LogoIcon width={45} height={45} />
          </div>
        </NavLink>

        <ul className={styles.header__nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <HomeIcon width={35} height={35} />
              <p>Моменты</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <SearchIcon width={35} height={35} />
              <p>Поиск</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <LikeIcon width={35} height={35} />
              <p>Уведомления</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <AddIcon width={35} height={35} />
              <p>Создать</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${userInfo?.username}`}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <ProfileIcon width={35} height={35} />
              <p>Профиль</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
