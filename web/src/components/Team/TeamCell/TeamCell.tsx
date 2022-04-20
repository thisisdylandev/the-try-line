import type { FindTeamById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'

import Team from 'src/components/Team/Team'
import Admin from 'src/components/Team/Admin'

export const QUERY = gql`
  query FindTeamById($id: Int!) {
    team: team(id: $id) {
      id
      name
      location
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { isAuthenticated, currentUser } = useAuth()
  if (isAuthenticated && currentUser.teamId === 0) {
    return <Redirect to={routes.newTeam()} />
  }
  return <div>Team not found</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ team }: CellSuccessProps<FindTeamById>) => {
  const { hasRole } = useAuth()
  if (hasRole('admin')) {
    return <Admin team={team} />
  }
  return <Team team={team} />
}
