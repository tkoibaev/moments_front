import profile1 from "./assets/mockImages/mockUsers/tkoibaev_profile_image.jpg"
import profile2 from "./assets/mockImages/mockUsers/davo_profile_image.jpg"
import profile3 from "./assets/mockImages/mockUsers/ak_profile_image.jpg"
import profile4 from "./assets/mockImages/mockUsers/vd_profile_image.jpg"
import profile5 from "./assets/mockImages/mockUsers/ga_profile_image.jpg"

import moment1 from "./assets/mockImages/MockMoments/moment1_image.jpg"
import moment2 from "./assets/mockImages/MockMoments/moment2_image.jpg"
import moment3 from "./assets/mockImages/MockMoments/moment3_image.jpg"
import moment4 from "./assets/mockImages/MockMoments/moment4_image.jpg"
import moment5 from "./assets/mockImages/MockMoments/moment5_image.jpg"
import moment6 from "./assets/mockImages/MockMoments/moment6_image.jpg"
import moment7 from "./assets/mockImages/MockMoments/moment7_image.jpg"
import moment8 from "./assets/mockImages/MockMoments/moment8_image.jpg"

export const Users = [
  {
    id: 0,
    email: "tkoibaev@gmail.com",
    login: "tkoibaev",
    avatar: profile1,
  },

  {
    id: 1,
    email: "davo777@gmail.com",
    login: "davo777",
    avatar: profile2,
  },
  {
    id: 2,
    email: "aminakoi@gmail.com",
    login: "aminka_vitaminka",
    avatar: profile3,
  },
  {
    id: 3,
    email: "vdz@gmail.com",
    login: "dzitiev_v",
    avatar: profile4,
  },
  {
    id: 4,
    email: "gaasievv@gmail.com",
    login: "gaasievv",
    avatar: profile5,
  },
]

export const Moments = [
  {
    id: 1,
    author: Users[0],
    image: moment1,
    date: "1h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[1],
        text: "Комментарий 1 к моменту 1",
        date: "20m",
      },
      {
        id: 2,
        author: Users[0],
        text: "Комментарий 2 к моменту 1",
        date: "20m",
      },
      {
        id: 3,
        author: Users[2],
        text: "Комментарий 3 к моменту 1",
        date: "20m",
      },
    ],
    likes: [
      { id: 1, author: Users[4], date: "1h" },
      { id: 2, author: Users[3], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //   -----------------------------------------
  {
    id: 2,
    author: Users[2],
    image: moment2,
    date: "2h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[2],
        text: "Комментарий 1 к моменту 2",
        date: "20m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 2",
        date: "20m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 2",
        date: "20m",
      },
    ],
    likes: [
      { id: 1, author: Users[1], date: "1h" },
      { id: 2, author: Users[2], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //------------------------------------
  {
    id: 3,
    author: Users[3],
    image: moment3,
    date: "3h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[3],
        text: "Комментарий 1 к моменту 3",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 3",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 3",
        date: "30m",
      },
    ],
    likes: [
      { id: 1, author: Users[4], date: "1h" },
      { id: 2, author: Users[3], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //------------------------------
  {
    id: 4,
    author: Users[4],
    image: moment4,
    date: "4h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[3],
        text: "Комментарий 1 к моменту 4",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 4",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 4",
        date: "30m",
      },
      {
        id: 4,
        author: Users[4],
        text: "Комментарий 4 к моменту 4 ",
        date: "30m",
      },
      {
        id: 5,
        author: Users[1],
        text: "Комментарий 5 к моменту 4",
        date: "30m",
      },
    ],
    likes: [
      { id: 1, author: Users[1], date: "1h" },
      { id: 2, author: Users[2], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //--------------------------
  {
    id: 5,
    author: Users[1],
    image: moment5,
    date: "5h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[3],
        text: "Комментарий 1 к моменту 5",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 5",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 5",
        date: "30m",
      },
      {
        id: 4,
        author: Users[0],
        text: "Комментарий 4 к моменту 5",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 5",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 5",
        date: "30m",
      },
      {
        id: 4,
        author: Users[0],
        text: "Комментарий 4 к моменту 5 Комментарий 4 к моменту 5 Комментарий 4 к моменту 5 Комментарий 4 к моменту 5",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 5",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 5",
        date: "30m",
      },
      {
        id: 4,
        author: Users[0],
        text: "Комментарий 4 к моменту 5",
        date: "30m",
      },
      {
        id: 5,
        author: Users[4],
        text: "Комментарий 5 к моменту 5",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 5",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 5",
        date: "30m",
      },
      {
        id: 4,
        author: Users[0],
        text: "Комментарий 4 к моменту 5",
        date: "30m",
      },
      {
        id: 5,
        author: Users[4],
        text: "Комментарий 5 к моменту 5",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 5",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 5",
        date: "30m",
      },
      {
        id: 4,
        author: Users[0],
        text: "Комментарий 4 к моменту 5",
        date: "30m",
      },
      {
        id: 5,
        author: Users[4],
        text: "Комментарий 5 к моменту 5",
        date: "30m",
      },
    ],
    likes: [
      { id: 1, author: Users[3], date: "1h" },
      { id: 2, author: Users[4], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //-------------------------------
  {
    id: 6,
    author: Users[2],
    image: moment6,
    date: "6h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[3],
        text: "Комментарий 1 к моменту 6",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 6",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 6",
        date: "30m",
      },
      {
        id: 4,
        author: Users[4],
        text: "Комментарий 4 к моменту 6",
        date: "30m",
      },
      {
        id: 5,
        author: Users[1],
        text: "Комментарий 5 к моменту 6",
        date: "30m",
      },
      {
        id: 4,
        author: Users[4],
        text: "Комментарий 4 к моменту 6",
        date: "30m",
      },
      {
        id: 5,
        author: Users[1],
        text: "Комментарий 5 к моменту 6",
        date: "30m",
      },
      {
        id: 5,
        author: Users[1],
        text: "Комментарий 5 к моменту 6",
        date: "30m",
      },
      {
        id: 5,
        author: Users[1],
        text: "Комментарий 5 к моменту 6",
        date: "30m",
      },
      {
        id: 5,
        author: Users[1],
        text: "Комментарий 5 к моменту 6",
        date: "30m",
      },
    ],
    likes: [
      { id: 1, author: Users[1], date: "1h" },
      { id: 2, author: Users[2], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //------------------------------
  {
    id: 7,
    author: Users[3],
    image: moment7,
    date: "7h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[3],
        text: "Комментарий 1 к моменту 7",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 7",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 7",
        date: "30m",
      },
    ],
    likes: [
      { id: 1, author: Users[1], date: "1h" },
      { id: 2, author: Users[2], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
  //--------------------
  {
    id: 8,
    author: Users[4],
    image: moment8,
    date: "8h",
    description:
      " Lorem ipsum dolor sit. Architecto assumenda explicabo libero placeat sapiente impedit sequi facere eveniet exercitationem id cumque praesentium quia eum, dolorem natus voluptates",
    comments: [
      {
        id: 1,
        author: Users[3],
        text: "Комментарий 1 к моменту 8",
        date: "30m",
      },
      {
        id: 2,
        author: Users[4],
        text: "Комментарий 2 к моменту 8",
        date: "30m",
      },
      {
        id: 3,
        author: Users[1],
        text: "Комментарий 3 к моменту 8",
        date: "30m",
      },
    ],
    likes: [
      { id: 1, author: Users[1], date: "1h" },
      { id: 2, author: Users[2], date: "30m" },
    ],
    tags: [
      { id: 1, title: "природа" },
      { id: 2, title: "горы" },
    ],
  },
]

export const MyPage = {
  id: 2,
  email: "tkoibaev@gmail.com",
  login: "tkoibaev",
  avatar: profile1,
  name: "Tamerlan Koibaev",
  posts: [Moments[1], Moments[2], Moments[3], Moments[5]],
  subscribers: [
    { id: 1, author: Users[1], date: "1h" },
    { id: 2, author: Users[2], date: "30m" },
    { id: 1, author: Users[1], date: "1h" },
    { id: 2, author: Users[2], date: "30m" },
    { id: 1, author: Users[1], date: "1h" },
    { id: 2, author: Users[2], date: "30m" },
  ],
  subscriptions: [
    { id: 1, author: Users[3], date: "1h" },
    { id: 2, author: Users[4], date: "30m" },
  ],
  about:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quos nihil dignis simos error, eaque quibusdam quidem similique non libero minus!",
}

export const VisitAuthor = {
  id: 2,
  email: "aminakoi@gmail.com",
  login: "aminka_vitaminka",
  avatar: profile3,
  name: "Amina Koibaeva",
  posts: [Moments[0], Moments[2], Moments[4]],
  subscribers: [
    { id: 1, author: Users[1], date: "1h" },
    { id: 2, author: Users[4], date: "30m" },
  ],
  subscriptions: [
    { id: 1, author: Users[3], date: "1h" },
    { id: 2, author: Users[1], date: "30m" },
  ],
  about:
    "Lom dolor, sit amet consectetur adipisicing elit. Numquam quos nihil dignis simos error, eaque quibusdam quidem similique non libero minus!",
}

export const Notifications = [
  {
    id: 0,
    author: Users[1],
    post: Moments[0],
    date: "1h",
    type: "like",
  },
  {
    id: 1,
    author: Users[1],
    date: "1h",
    type: "sub",
  },
  {
    id: 2,
    author: Users[2],
    post: Moments[0],
    date: "1h",
    type: "like",
  },
  {
    id: 3,
    author: Users[3],
    post: Moments[0],
    date: "1h",
    type: "like",
  },
  {
    id: 4,
    author: Users[1],
    date: "1h",
    type: "sub",
  },
]

export const AuthLogin = "tkoibaev"
