import React, { useLayoutEffect } from "react"
import styles from "./MomentsPage.module.scss"
import LogoIcon from "../../components/Icons/LogoIcon"
import MomentsList from "../../components/MomentsList"
import profile1 from "../../assets/mockImages/mockProfile1.jpg"
import profile2 from "../../assets/mockImages/mockProfile2.jpg"

import { Moments } from "../../consts"

const mockMoment = [
  {
    id: 1,
    author: {
      id: 1,
      login: "tkoibaev",
      image: profile1,
    },
    image: profile1,
    date: "1 year ago",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosa at omnis autem, ab, error minus voluptatum voluptate fugit accusamus impedit unde labore tempore saepe vitae similique fuga harum asperiores!",
    comments: [
      {
        id: 1,
        author: "g_ashurov",
        text: "lalalalalala llaalalla",
        date: "1h",
      },
      {
        id: 2,
        author: "v_dzitiev",
        text: "Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        date: "1h",
      },
      {
        id: 3,
        author: "davo777",
        text: "lalalalalalallaalalla",
        date: "1h",
      },
      {
        id: 4,
        author: "amina_koi",
        text: "lalalalalalallaalalla  lalalalalalallaalalla lalalalalalallaalalla",
        date: "1h",
      },
    ],
  },
  {
    id: 1,
    author: {
      id: 1,
      login: "davo777",
      image: profile2,
    },
    image: profile2,
    date: "1 year ago",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosa at omnis autem, ab, error minus voluptatum voluptate fugit accusamus impedit unde labore tempore saepe vitae similique fuga harum asperiores!",
    comments: [
      {
        id: 1,
        author: "g_ashurov",
        text: "lalalalalala llaalalla",
        date: "1h",
      },
      {
        id: 2,
        author: "v_dzitiev",
        text: "Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        date: "1h",
      },
      {
        id: 3,
        author: "davo777",
        text: "lalalalalalallaalalla",
        date: "1h",
      },
      {
        id: 4,
        author: "amina_koi",
        text: "lalalalalalallaalalla  lalalalalalallaalalla lalalalalalallaalalla",
        date: "1h",
      },
      {
        id: 1,
        author: "g_ashurov",
        text: "lalalalalala llaalalla",
        date: "1h",
      },
      {
        id: 2,
        author: "v_dzitiev",
        text: "Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        date: "1h",
      },
      {
        id: 3,
        author: "davo777",
        text: "lalalalalalallaalalla",
        date: "1h",
      },
      // {
      //   id: 4,
      //   author: "amina_koi",
      //   text: "lalalalalalallaalalla  lalalalalalallaalalla lalalalalalallaalalla",
      //   date: "1h",
      // },
    ],
  },
  {
    id: 1,
    author: {
      id: 1,
      login: "tkoibaev",
      image: profile1,
    },
    image: profile1,
    date: "1 year ago",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosa at omnis autem, ab, error minus voluptatum voluptate fugit accusamus impedit unde labore tempore saepe vitae similique fuga harum asperiores!",
    comments: [
      {
        id: 1,
        author: "g_ashurov",
        text: "lalalalalala llaalalla",
        date: "1h",
      },
      {
        id: 2,
        author: "v_dzitiev",
        text: "Lorem, ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        date: "1h",
      },
      {
        id: 3,
        author: "davo777",
        text: "lalalalalalallaalalla",
        date: "1h",
      },
      {
        id: 4,
        author: "amina_koi",
        text: "lalalalalalallaalalla  lalalalalalallaalalla lalalalalalallaalalla",
        date: "1h",
      },
    ],
  },
]

const MomentsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <h1>Лента моментов</h1>
      </div>
      <div className={styles.page__content}>
        <MomentsList moments={Moments} />
      </div>
    </div>
  )
}

export default MomentsPage
