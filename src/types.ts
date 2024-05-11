export interface Author {
  id: number
  email: string
  username: string
  avatar: string
  bio: string
}

export interface Subs {
  id: number
  author: Author
  subscriber: Author
  date_created: string
}

export interface Tag {
  id: number
  name: string
}

export interface Comment {
  id: number
  author: Author
  content: string
  date: string
}

export interface Like {
  id: number
  author: Author
  date: string
}

export interface Moment {
  id: number
  author: Author
  image: string
  date: string
  description: string
  comments: Comment[]
  likes: {
    id: number
    author: Author
    date_created: string
  }[]
  tags: Tag[]
}

export interface Profile {
  id: number
  user: Author

  posts: Moment[]
  subscribers: {
    id: number
    author: Author
    date: string
  }[]
  subscriptions: {
    id: number
    author: Author
    date: string
  }[]

  about: string
}

export interface Notification {
  id: number
  author: Author
  post?: Moment
  date: string
  type: string
}

import { AxiosResponse } from "axios"
export type Response = Promise<AxiosResponse> | any
