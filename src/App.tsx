import './App.css'
import { Route, Routes } from 'react-router-dom'
import PostList from './components/post-list.tsx'
import Navigation from './components/navigation.tsx'
import AddPost from './components/add-post.tsx'
import PostEdit from './components/post-edit.tsx'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/posts/:id" element={<PostEdit />} />
      </Routes>
    </>
  )
}

export default App
