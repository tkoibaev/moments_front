import React, { useState, useEffect } from "react"
import styles from "./Uploader.module.scss"
import Input from "../../components/Input"
import Button from "../../components/Button"
import PhotoIcon from "../../components/Icons/PhotoIcon"

const Uploader = () => {
  const [descriptionValue, setDescriptionValue] = useState<string>("")
  const [tagValue, setTagValue] = useState<string>("")
  const [files, setFiles] = useState<FileList | null>(null)
  const [preview, setPreview] = useState<string | undefined>()

  const handleDescriptionInputChange = (value: string) => {
    setDescriptionValue(value)
  }

  const handleTagInputChange = (value: string) => {
    setTagValue(value)
  }

  useEffect(() => {
    if (files && files.length > 0) {
      setPreview(URL.createObjectURL(files[0]))
    }
  }, [files])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 1) {
      setFiles(e.target.files)
    }
  }

  return (
    <div>
      <form action="" className={styles.form}>
        <label className={styles["input-file"]}>
          <input
            type="file"
            accept="image/jpg"
            multiple
            onChange={handleFileChange}
            className={styles["form__file-input"]}
          />

          {!preview && (
            <>
              <div className={styles["input-file-icon"]}>
                <PhotoIcon width={30} height={30} />
              </div>
              <span className={styles["input-file-text"]}>
                Добавьте изображение для момента
              </span>
            </>
          )}
        </label>

        {preview && (
          <img className={styles["form__file-preview"]} src={preview} />
        )}

        <div className={styles["input-text"]}>
          <Input
            mode="add"
            onChangeValue={handleDescriptionInputChange}
            value={descriptionValue}
            placeholder="Добавьте описание"
            searchValue={descriptionValue}
          />
          <Input
            mode="add"
            onChangeValue={handleTagInputChange}
            value={tagValue}
            placeholder="Добавьте теги"
            searchValue={tagValue}
          />
        </div>

        <Button disabled={!preview} type="submit" mode="active">
          Опубликовать
        </Button>
      </form>
    </div>
  )
}

export default Uploader
