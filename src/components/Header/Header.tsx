import React from "react"
import styles from "./Header.module.scss"
import LogoIcon from "../../components/Icons/LogoIcon"
import HomeIcon from "../../components/Icons/HomeIcon"
import LikeIcon from "../../components/Icons/LikeIcon"
import SearchIcon from "../../components/Icons/SearchIcon"
import AddIcon from "../../components/Icons/AddIcon"
import ProfileIcon from "../../components/Icons/ProfileIcon"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>
          <h2>MOMENTS</h2>
          <LogoIcon width={45} height={45} />
        </div>

        <ul className={styles.header__nav}>
          <li>
            <HomeIcon width={35} height={35} />
            <p>Моменты</p>
          </li>
          <li>
            <SearchIcon width={35} height={35} />
            <p>Поиск</p>
          </li>
          <li>
            <LikeIcon width={35} height={35} />
            <p>Уведомления</p>
          </li>
          <li>
            <AddIcon width={35} height={35} />
            <p>Создать</p>
          </li>
          <li>
            <ProfileIcon width={35} height={35} />
            <p>Профиль</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
