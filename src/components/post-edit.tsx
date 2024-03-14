import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect, useMemo, useState } from 'react'
import { getPosts, updatePost } from '../store/thunks/post-thunks'
import { Post } from '../types/post-types'

const PostEdit = () => {
  const [inputVisible, setInputVisible] = useState(false)
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { posts, loading, error } = useAppSelector((store) => store.posts)
  const currentPost = useMemo(() => {
    return posts.find((post: Post) => post.id === id)
  }, [id, posts])

  const [title, setTitle] = useState(currentPost?.title ?? '')
  const [views, setViews] = useState(Number(currentPost?.views) + 1 ?? '')
  useEffect(() => {
    dispatch(getPosts('/posts'))
  }, [dispatch])

  // const viewsUpdate = () => {
  //   setViews(() => views + 1)
  // }
  const updatedPost = { ...currentPost, title, views }
  // updatePost(updatedPost)
  const handleUpdate = (event) => {
    event.stopPropagation()
    setInputVisible(false)

    dispatch(updatePost(updatedPost))
  }
  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <div>
        Title:{' '}
        {inputVisible ? (
          <>
            <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
            <button onClick={handleUpdate} type="button">
              Save
            </button>
          </>
        ) : (
          <span onClick={() => setInputVisible((prev) => !prev)}>{currentPost?.title}</span>
        )}
      </div>
      <div>Views:{views}</div>
    </>
  )
}

export default PostEdit
