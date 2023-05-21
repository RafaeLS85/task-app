import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <Link to="/tasks">
            <h1>Tasks App</h1>
        </Link>
        <Link to="/tasks-create">+ New task</Link>
    </div>
  )
}
