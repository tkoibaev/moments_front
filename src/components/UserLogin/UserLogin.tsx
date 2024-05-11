import React from "react"
import styles from "./UserLogin.module.scss"
import { Link } from "react-router-dom"

export type UserLoginProps = {
  login?: string
}

const UserLogin: React.FC<UserLoginProps> = ({ login }) => {
  return (
    <Link to={`/${login}`}>
      <h3 className={styles.login}>{login}</h3>
    </Link>
  )
}

export default UserLogin
