import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const Nav = () => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex mr-6">
        <Link to={routes.teams()} className="flex navbar-brand">
          <img
            src="img/post.svg"
            alt="Logo"
            style={{ maxHeight: '50px', minHeight: '50px' }}
            className="flex-1 mr-3"
          />
          <p className="font-jersey font-bold text-yellow-300 text-4xl m-auto">
            THE TRY LINE
          </p>
        </Link>
      </div>
      <div className="w-full block flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow"></div>
        <div>
          {isAuthenticated ? (
            <div>
              <button
                className="hover:bg-yellow-600 border border-white text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to={routes.login()}
                className="hover:bg-yellow-600 border border-white text-white font-bold py-2 px-4 rounded block mt-4 inline-block mt-0 hover: mr-4"
              >
                Login
              </Link>
              <Link
                to={routes.signup()}
                className="hover:bg-yellow-600 border border-white text-white font-bold py-2 px-4 rounded block mt-4 inline-block mt-0 hover: mr-4"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
