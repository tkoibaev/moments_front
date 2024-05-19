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
  liked_by_current_user?: boolean
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
  date_created: string
  description: string
  comments: Comment[]
  likes: {
    id: number
    author: Author
    date_created: string
  }[]
  tags: Tag[]
  liked_by_current_user?: boolean
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

//NOTIFICATIONS
interface TargetLike {
  id: number
  author: Author
  date_created: string
}

interface TargetComment {
  id: number
  author: Author
  date_created: string
  content: string
}

interface TargetSubscribe {
  id: number
  author: Author
  subscriber: Author
  date_created: string
}

type NotificationType = "like" | "comment" | "subscribe"
export interface Notification {
  target: TargetLike | TargetComment | TargetSubscribe
  type: NotificationType
  moment_image?: string
  timestamp: string
}

import { AxiosResponse } from "axios"
export type Response = Promise<AxiosResponse> | any
