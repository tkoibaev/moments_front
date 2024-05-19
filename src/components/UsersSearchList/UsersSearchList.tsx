import React, { useEffect } from "react"
import styles from "./UsersSearchList.module.scss"
import { Author } from "../../types"
import AvatarComponent from "../../components/AvatarComponent"
import UserLogin from "../../components/UserLogin"
import DateTag from "../../components/DateTag"

export type UsersSearchListProps = {
  users: Author[]
}

const UsersSearchList: React.FC<UsersSearchListProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        {users &&
          users.map((user) => (
            <li className={styles.container__list_item} key={user.id}>
              <AvatarComponent
                className={styles.container__list_item_avatar}
                image={user.avatar}
              />
              <UserLogin login={user.username} />
            </li>
          ))}
        <li></li>
      </ul>
    </div>
  )
}

export default UsersSearchList
