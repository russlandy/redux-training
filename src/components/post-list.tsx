import { useAppDispatch, useAppSelector } from '../hooks/redux.ts'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { deletePost, getPosts } from '../store/thunks/post-thunks.ts'

const PostList = () => {
  const dispatch = useAppDispatch()
  const { posts, loading, error } = useAppSelector((store) => store.posts)

  useEffect(() => {
    dispatch(getPosts('/posts'))
  }, [])

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-2.5">
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {posts?.map((post) => (
          <div key={post.id} className="flex justify-between items-center w-1/2 mb-2.5">
            <div>
              <Link to={`/posts/${post.id}`}>
                <span className="font-bold">Title: </span> {post.title}
              </Link>
              <br />
              <Link to={`/posts/${post.id}`}>
                <span className="font-bold">Views: </span> {post.views}
              </Link>
            </div>
            <button
              onClick={() => dispatch(deletePost(post.id))}
              className="bg-red-500 text-white p-2">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostList
