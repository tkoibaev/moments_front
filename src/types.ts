export interface Author {
  id: number
  email: string
  login: string
  avatar: string
}

export interface Tag {
  id: number
  title: string
}

export interface Comment {
  id: number
  author: Author
  text: string
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
    date: string
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
