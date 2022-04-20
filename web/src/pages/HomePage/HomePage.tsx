import { Link, Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  if (isAuthenticated) {
    return <Redirect to={routes.team({ id: currentUser.teamId })} />
  }
  return (
    <>
      <MetaTags
        title="Home"
        description="The Try Line, management for your rugby club"
      />
      <div className="home-page-container">
        <div className="m-auto max-w-3xl p-8 text-center">
          <h1 className="font-jersey text-6xl m-auto min-w-fit text-white home-page-header">
            Welcome to The Try Line
          </h1>
          <div className="bg-blue-500 pb-3 rounded-lg drop-shadow-xl">
            <p className="text-white text-2xl m-3">
              Automate managing your rugby team
            </p>
            <p className="text-white text-xl m-3">
              Never let your players forget a practice or game again
            </p>
            <div>
              <Link
                to={routes.signup()}
                className="drop-shadow-lg bg-blue-500 hover:bg-yellow-600 border border-white text-white font-bold py-2 px-4 rounded"
              >
                GET STARTED
              </Link>
              <Link
                to={routes.login()}
                className="ml-4 drop-shadow-lg bg-blue-500 hover:bg-yellow-600 border border-white text-white font-bold py-2 px-4 rounded"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
