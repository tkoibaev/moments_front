import React from "react"
import styles from "./Header.module.scss"
import LogoIcon from "../../components/Icons/LogoIcon"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>
          <LogoIcon />
          Moments
        </div>
        <div className={styles.header__nav}>
          <ul>
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
            <li>ddd</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
