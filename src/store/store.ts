import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"

const store = configureStore({
  reducer: {
    userData: userReducer,
  },
})

export default store
