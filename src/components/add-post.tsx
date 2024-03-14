import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../hooks/redux.ts'
import { addPost } from '../store/thunks/post-thunks.ts'
import { Post } from '../types/post-types.ts'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
  const [formData, setFormData] = useState({ title: '', views: 0 })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addPost(formData as Post))
      .then(() => navigate('/'))
      .catch(console.log)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input type="text" name="title" className="border-2" onChange={handleChange} />

      <label htmlFor="views"></label>
      <input type="number" name="views" className="border-2" onChange={handleChange} />

      <button type="submit">Add post</button>
    </form>
  )
}

export default AddPost
