import React, { useEffect, useRef } from "react"
import styles from "./AuthPage.module.scss"
import clsx from "clsx"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Response } from "../../types"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/UserSlice"

const AuthPage = () => {
  const [signIn, toggle] = React.useState(false)
  const loginForm = useRef<HTMLFormElement>(null)
  const registrationForm = useRef<HTMLFormElement>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    signIn ? (document.title = "Авторизация") : (document.title = "Регистарция")
    if (signIn) {
      resetLogin()
    } else {
      resetRegistration()
    }
  }, [signIn])

  const registrationFormMethods = useForm({
    mode: "onChange",
  })
  const loginFormMethods = useForm({
    mode: "onChange",
  })

  const {
    register: registerRegistration,
    formState: registrationFormState,
    reset: resetRegistration,
  } = registrationFormMethods

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: loginFormState,
    reset: resetLogin,
  } = loginFormMethods

  const { isValid: isRegistrationValid } = registrationFormState
  const { isValid: isLoginValid } = loginFormState

  const handleLoginSubmit = async () => {
    const loginData = {
      username: loginFormMethods.getValues("authLogin"),
      password: loginFormMethods.getValues("authPassword"),
    }
    try {
      const response: Response = await axios(
        "http://localhost:8000/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: loginData,
          withCredentials: true,
        }
      )

      dispatch(setUser(response.data))
      toast.success("ура")
      navigate("/")
    } catch (error) {
      console.error("Ошибка при обработке запроса", error)
      toast.error("Проверьте введенные данные!")
    }
  }

  const handleRegisterSubmit = async () => {
    const registrationData = {
      username: registrationFormMethods.getValues("regLogin"),
      email: registrationFormMethods.getValues("regEmail"),
      password: registrationFormMethods.getValues("regPassword"),
    }

    try {
      const response: Response = await axios(
        "http://localhost:8000/api/registrate/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: registrationData,
          withCredentials: true,
        }
      )
      dispatch(setUser(response.data))
      toast.success("Регистрация прошла успешно!")
      navigate("/")
    } catch (error) {
      console.error("Ошибка при регистрации", error)
      toast.error("Проверьте введенные данные!")
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          className={clsx(styles["container__signup"], {
            [styles.active]: !signIn,
          })}
        >
          <form
            onSubmit={handleSubmitLogin(handleRegisterSubmit)}
            ref={registrationForm}
            className={styles.form}
          >
            <h1>Регистрация</h1>
            <div style={{ position: "relative", width: `100%` }}>
              <input
                {...registerRegistration("regLogin", {
                  required: "Обязательное поле",
                  maxLength: {
                    value: 15,
                    message: "Максимум 15 символов",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._]*$/,
                    message:
                      "В логине не допускаются специальные символы, кроме точки и подчеркивания",
                  },
                })}
                className={styles.form__input}
                placeholder="Придумайте логин"
              />
              {registrationFormMethods.formState.errors.regLogin &&
                registrationFormMethods.formState.touchedFields.regLogin && (
                  <div className={styles.form__input_message}>
                    {registrationFormMethods.formState.errors?.regLogin?.message?.toString()}
                  </div>
                )}
            </div>

            <div style={{ position: "relative", width: `100%` }}>
              <input
                {...registerRegistration("regEmail", {
                  required: "Обязательное поле",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Введите корректный e-mail", //!!!
                  },
                })}
                type="email"
                className={styles.form__input}
                placeholder="Введите e-mail"
              />
              {registrationFormMethods.formState.errors?.regEmail &&
                registrationFormMethods.formState.touchedFields.regEmail && (
                  <div className={styles.form__input_message}>
                    {registrationFormMethods.formState.errors?.regEmail?.message?.toString()}
                  </div>
                )}
            </div>

            <div style={{ position: "relative", width: `100%` }}>
              <input
                {...registerRegistration("regPassword", {
                  required: "Обязательное поле",
                  // pattern: {
                  //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  //   message: "Введите корректный e-mail", //!!!
                  // },
                  minLength: {
                    value: 8,
                    message: "Минимум 8 символов",
                  },
                })}
                type="password"
                className={styles.form__input}
                placeholder="Придумайте пароль"
              />
              {registrationFormMethods.formState.errors?.regPassword &&
                registrationFormMethods.formState.touchedFields.regPassword && (
                  <div className={styles.form__input_message}>
                    {registrationFormMethods.formState.errors?.regPassword?.message?.toString()}
                  </div>
                )}
            </div>

            <Button disabled={!isRegistrationValid} mode="active">
              Регистрация
            </Button>
          </form>
        </div>
        {/* ------------------------------------------------------- */}
        <div
          className={clsx(styles["container__signin"], {
            [styles.active]: !signIn,
          })}
        >
          <form
            onSubmit={handleSubmitLogin(handleLoginSubmit)}
            ref={loginForm}
            className={styles.form}
          >
            <h1>Авторизация</h1>
            <div style={{ position: "relative", width: `100%` }}>
              <input
                {...registerLogin("authLogin", {
                  required: "Обязательное поле",
                  maxLength: {
                    value: 15,
                    message: "Максимум 15 символов",
                  },

                  pattern: {
                    value: /^[a-zA-Z0-9._]*$/,
                    message: "Логин не должен содержать специальные символы",
                  },
                })}
                className={styles.form__input}
                placeholder="Введите логин"
              />
              {loginFormMethods.formState.errors?.authLogin &&
                loginFormMethods.formState.touchedFields.authLogin && (
                  <div className={styles.form__input_message}>
                    {loginFormMethods.formState.errors?.authLogin?.message?.toString()}
                  </div>
                )}
            </div>

            <div style={{ position: "relative", width: `100%` }}>
              <input
                {...registerLogin("authPassword", {
                  required: "Обязательное поле",
                  // pattern: {
                  //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  //   message: "Введите корректный e-mail", //!!!
                  // },
                  minLength: {
                    value: 8,
                    message: "Минимум 8 символов",
                  },
                })}
                className={styles.form__input}
                type="password"
                placeholder="Введите пароль"
              />
              {loginFormMethods.formState.errors?.authPassword &&
                loginFormMethods.formState.touchedFields.authPassword && (
                  <div className={styles.form__input_message}>
                    {loginFormMethods.formState.errors?.authPassword?.message?.toString()}
                  </div>
                )}
            </div>

            <Button
              onSubmit={() => handleLoginSubmit}
              disabled={!isLoginValid}
              mode="active"
            >
              Войти
            </Button>
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
              <p>Авторизируйтесь, чтобы войти в свой профиль!</p>
              <Button
                mode="light"
                onClick={() => {
                  toggle(true)
                }}
              >
                Войти
              </Button>
            </div>
            <div
              className={clsx(styles["overlay__right"], {
                [styles.active]: !signIn,
              })}
            >
              <h1>Нет аккаунта?</h1>
              <p>Зарегистрируйтесь, чтобы всегда быть на связи!</p>
              <Button
                mode="light"
                onClick={() => {
                  toggle(false)
                }}
              >
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
