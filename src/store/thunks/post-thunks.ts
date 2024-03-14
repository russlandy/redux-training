import { Dispatch } from 'react'
import {
  AddPostAction,
  DeletePostAction,
  // GetPostAction,
  GetPostsAction,
  UpdatePostAction
} from '../types/post-types.ts'
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
  // GET_POST_FAILURE,
  // GET_POST_REQUEST,
  // GET_POST_SUCCESS
} from '../actions/post-action-types.ts'
import { makeRequest } from '../../api/make-request.ts'
import { Post } from '../../types/post-types.ts'

export const getPosts = (url: string) => {
  return async (dispatch: Dispatch<GetPostsAction>) => {
    dispatch({ type: GET_POSTS_REQUEST })
    try {
      const data = await makeRequest<Post[]>(url)
      dispatch({ type: GET_POSTS_SUCCESS, payload: { posts: data } })
    } catch (error) {
      const er = error as Error
      dispatch({ type: GET_POSTS_FAILURE, payload: { error: er.message } })
    }
  }
}

// export const getPost = (id: string) => {
//   return async (dispatch: Dispatch<GetPostAction>) => {
//     dispatch({ type: GET_POST_REQUEST })
//     try {
//       const post = await makeRequest<Post>(`/posts/${id}`)
//       dispatch({ type: GET_POST_SUCCESS, payload: { post } })
//     } catch (error) {
//       const err = error as Error
//       dispatch({ type: GET_POST_FAILURE, payload: { error: err.message } })
//     }
//   }
// }

export const deletePost = (id: string) => {
  return async (dispatch: Dispatch<DeletePostAction>) => {
    dispatch({ type: DELETE_POST_REQUEST })
    try {
      makeRequest<void>(`/posts/${id}`, {
        method: 'DELETE'
      })
      dispatch({ type: DELETE_POST_SUCCESS, payload: { id } })
    } catch (error) {
      const err = error as Error
      dispatch({ type: DELETE_POST_FAILURE, payload: { error: err.message } })
    }
  }
}

export const addPost = (post: Post) => {
  return async (dispatch: Dispatch<AddPostAction>) => {
    dispatch({ type: ADD_POST_REQUEST })
    try {
      const newPost = await makeRequest('/posts', {
        method: 'POST',
        data: post
      })
      dispatch({ type: ADD_POST_SUCCESS, payload: { post: newPost } })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch({ type: ADD_POST_FAILURE, payload: { error: error.message } })
    }
  }
}

export const updatePost = (post: Post) => {
  return async (dispatch: Dispatch<UpdatePostAction>) => {
    dispatch({ type: UPD_POST_REQUEST })
    try {
      const updatedPost = await makeRequest(`/posts/${post.id}`, {
        method: 'PUT',
        data: post
      })
      dispatch({ type: UPD_POST_SUCCESS, payload: { post: updatedPost } })
    } catch (error) {
      dispatch({ type: UPD_POST_FAILURE, payload: { error: error?.message } })
    }
  }
}
