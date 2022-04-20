import { Redirect, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import TeamsCell from 'src/components/Team/TeamsCell'

const TeamsPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  if (isAuthenticated) {
    return <Redirect to={routes.team({ id: currentUser.teamId })} />
  }
  return <TeamsCell />
}

export default TeamsPage
