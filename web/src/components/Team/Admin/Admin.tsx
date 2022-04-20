import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TEAM_MUTATION = gql`
  mutation DeleteTeamMutation($id: Int!) {
    deleteTeam(id: $id) {
      id
    }
  }
`

const Team = ({ team }) => {
  const [deleteTeam] = useMutation(DELETE_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('Team deleted')
      navigate(routes.teams())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete team ' + id + '?')) {
      deleteTeam({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            {team.name} Details
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{team.name}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{team.location}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{team.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeam({ id: team.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(team.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Team
