import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()
  console.error({ 'REPORTED ERROR': error })

  return (
    <div className="Error 404">
      <h1>404</h1>
      <p>The page you were looking for was not found.</p>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}
