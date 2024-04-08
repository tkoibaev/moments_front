import React, { useEffect, useState, useRef } from "react"
import styles from "./EditProfileForm.module.scss"
import Input from "../../components/Input"
import { Author } from "../../types"
import AvatarComponent from "../../components/AvatarComponent"
import AddIcon from "../../components/Icons/AddIcon"
import Button from "../../components/Button"

export type EditProfileFormProps = {
  user: Author
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ user }) => {
  const [loginValue, setLoginValue] = useState<string>(user.login)
  const [emailValue, setEmailValue] = useState<string>(user.email)
  const [avatarImage, setAvatarImage] = useState<string>(user.avatar)
  const [files, setFiles] = useState<FileList | null>(null)
  const [preview, setPreview] = useState<string | undefined>()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleLoginInputChange = (value: string) => {
    setLoginValue(value)
  }

  const handleEmailInputChange = (value: string) => {
    setEmailValue(value)
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 1) {
      setFiles(e.target.files)
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  useEffect(() => {
    if (files && files.length > 0) {
      setPreview(URL.createObjectURL(files[0]))
    }
  }, [files])

  return (
    <form className={styles.form}>
      <div className={styles.form__image}>
        <AvatarComponent
          className={styles.form__image_preview}
          image={preview || avatarImage}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
          ref={fileInputRef}
        />
        <AddIcon
          fill="#fff"
          onClick={() => {
            fileInputRef.current?.click()
          }}
          className={styles.form__image_edit}
        />
      </div>
      <Input
        className={styles.form__input}
        mode="search"
        onChangeValue={handleLoginInputChange}
        value={loginValue}
        placeholder="Добавьте логин"
        searchValue={loginValue}
      />
      <Input
        className={styles.form__input}
        mode="search"
        onChangeValue={handleEmailInputChange}
        value={emailValue}
        placeholder="Добавьте почту"
        searchValue={emailValue}
      />

      <Button className={styles.form__submit} mode="active">
        Сохранить изменения
      </Button>
    </form>
  )
}

export default EditProfileForm
