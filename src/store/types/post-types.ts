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
  UPD_POST_SUCCESS,
  UPD_POST_REQUEST
} from '../actions/post-action-types.ts'
import { Post } from '../../types/post-types.ts'

export type GetPostsAction =
  | { type: typeof GET_POSTS_REQUEST }
  | { type: typeof GET_POSTS_SUCCESS; payload: { posts: Post[] } }
  | { type: typeof GET_POSTS_FAILURE; payload: { error: string } }

// export type GetPostAction =
//   | { type: typeof GET_POST_REQUEST }
//   | { type: typeof GET_POST_SUCCESS; payload: { posts: Post[] } }
//   | { type: typeof GET_POST_FAILURE; payload: { error: string } }

export type DeletePostAction =
  | { type: typeof DELETE_POST_REQUEST }
  | { type: typeof DELETE_POST_SUCCESS; payload: { id: string } }
  | { type: typeof DELETE_POST_FAILURE; payload: { error: string } }

export type AddPostAction =
  | { type: typeof ADD_POST_REQUEST }
  | { type: typeof ADD_POST_SUCCESS; payload: { post: Post } }
  | { type: typeof ADD_POST_FAILURE; payload: { error: string } }

export type UpdatePostAction =
  | { type: typeof UPD_POST_REQUEST }
  | { type: typeof UPD_POST_SUCCESS; payload: { post: Post } }
  | { type: typeof UPD_POST_FAILURE; payload: { error: string } }

export type PostActions = GetPostsAction | DeletePostAction | AddPostAction | UpdatePostAction
