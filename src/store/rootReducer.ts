import { combineReducers } from 'redux'
import { postReducer } from './reducers/post-reducers.ts'

const rootReducer = combineReducers({
  posts: postReducer
})

export default rootReducer
