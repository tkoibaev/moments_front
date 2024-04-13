import React from "react"
import styles from "./UsersList.module.scss"
import { Author } from "../../types"
import AvatarComponent from "../../components/AvatarComponent"
import UserLogin from "../../components/UserLogin"
import DateTag from "../../components/DateTag"

export type UserListProps = {
  users?: { id: number; author: Author; date: string }[]
  title: string
}

const UsersList: React.FC<UserListProps> = ({ users, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{title}</h2>
      <ul className={styles.container__list}>
        {users &&
          users.map((user) => (
            <li className={styles.container__list_item} key={user.id}>
              <AvatarComponent
                className={styles.container__list_item_avatar}
                image={user.author.avatar}
              />
              <UserLogin login={user.author.login} />
              <DateTag date={user.date} />
            </li>
          ))}
        <li></li>
      </ul>
    </div>
  )
}

export default UsersList
