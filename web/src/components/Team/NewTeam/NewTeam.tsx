import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import randomWords from 'random-words'

import TeamForm from 'src/components/Team/TeamForm'
import JoinForm from 'src/components/Team/JoinForm'

const CREATE_TEAM_MUTATION = gql`
  mutation CreateTeamMutation($input: CreateTeamInput!) {
    createTeam(input: $input) {
      id
    }
  }
`

const NewTeam = () => {
  const [createTeam, { loading, error }] = useMutation(CREATE_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('Team created')
      navigate(routes.teams())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    input.joinCode = randomWords(5).join('-')
    createTeam({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Have a team&apos;s code?
        </h2>
      </header>
      <div className="rw-segment-main">
        <JoinForm onSave={onSave} loading={loading} error={error} />
      </div>
      <header className="rw-segment-header mt-8">
        <h2 className="rw-heading rw-heading-secondary">Create A New Team</h2>
      </header>
      <div className="rw-segment-main">
        <TeamForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTeam
