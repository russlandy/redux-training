import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-gray-400 h-12 flex items-center justify-end text-white p-4">
      <ul className="list-none flex gap-x-8">
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/add-post">Add post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
