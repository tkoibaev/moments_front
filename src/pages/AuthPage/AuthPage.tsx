import React from "react"
import styles from "./AuthPage.module.scss"
import clsx from "clsx"
import Button from "../../components/Button"

const AuthPage = () => {
  const [signIn, toggle] = React.useState(false)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          className={clsx(styles["container__signup"], {
            [styles.active]: !signIn,
          })}
        >
          <form className={styles.form}>
            <h1>Регистрация</h1>
            <input type="text" placeholder="e-mail"></input>
            <input type="text" placeholder="login"></input>
            <input type="text" placeholder="password"></input>
            <Button mode="active">Зарегистрироваться</Button>
          </form>
        </div>
        <div
          className={clsx(styles["container__signin"], {
            [styles.active]: !signIn,
          })}
        >
          <form className={styles.form}>
            <h1>Авторизация</h1>
            <input type="text" placeholder="login"></input>
            <input type="text" placeholder="password"></input>
            <Button mode="active">Войти</Button>
          </form>
        </div>
        <div className={clsx(styles.overlay, { [styles.active]: !signIn })}>
          <div
            className={clsx(styles["overlay__inner"], {
              [styles.active]: !signIn,
            })}
          >
            <div
              className={clsx(styles["overlay__left"], {
                [styles.active]: !signIn,
              })}
            >
              <h1>Уже есть аккаунт?</h1>
              <p>Авторизируйтесь, чтобы войти в Ваш профиль!</p>
              <Button mode="light" onClick={() => toggle(true)}>
                Авторизоваться
              </Button>
            </div>
            <div
              className={clsx(styles["overlay__right"], {
                [styles.active]: !signIn,
              })}
            >
              <h1>Нет аккаунта?</h1>
              <p>Зарегистрируйтесь, чтобы всегда быть на связи!</p>
              <Button mode="light" onClick={() => toggle(false)}>
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
