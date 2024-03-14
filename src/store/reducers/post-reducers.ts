import { Post } from '../../types/post-types.ts'
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  UPD_POST_FAILURE,
  UPD_POST_REQUEST,
  UPD_POST_SUCCESS
} from '../actions/post-action-types.ts'
import { PostActions } from '../types/post-types.ts'

type PostsStateType = {
  posts: Post[]
  loading: boolean
  error: string
}

const initialState: PostsStateType = {
  posts: [],
  loading: false,
  error: ''
}

export const postReducer = (state: PostsStateType = initialState, action: PostActions) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
    case DELETE_POST_REQUEST:
    case ADD_POST_REQUEST:
    case UPD_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_POSTS_SUCCESS:
      // case GET_POST_SUCCESS:
      return {
        loading: false,
        error: '',
        posts: action.payload.posts
      }
    case DELETE_POST_SUCCESS:
      return {
        loading: false,
        error: '',
        posts: state.posts.filter((post) => post.id !== action.payload.id)
      }
    case ADD_POST_SUCCESS:
      return {
        loading: false,
        error: '',
        posts: [...state.posts, action.payload.post]
      }
    case UPD_POST_SUCCESS:
      return {
        loading: false,
        error: '',
        posts: state.posts.map((post) =>
          post.id === action.payload.post.id ? action.payload.post : post
        )
      }
    case GET_POSTS_FAILURE:
    case DELETE_POST_FAILURE:
    case ADD_POST_FAILURE:
    case UPD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

// const deletePost = (state: PostsStateType = initialState, action: DeletePostAction) => {
//   switch (action.type) {
//     case DELETE_POST_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: ''
//       }
//     case DELETE_POST_SUCCESS:
//       return {
//         loading: false,
//         error: '',
//         posts: state.posts.filter((post) => post.id !== action.payload.id)
//       }
//     case DELETE_POST_FAILURE:
//       return {
//         ...state,
//         error: action.payload.error,
//         loading: false
//       }
//     default:
//       return state
//   }
// }
