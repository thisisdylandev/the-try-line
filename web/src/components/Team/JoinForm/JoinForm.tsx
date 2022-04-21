import { useLazyQuery } from '@apollo/client'
import { Redirect, routes } from '@redwoodjs/router'

import { useState } from 'react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'

export const QUERY = gql`
  query FindTeamByJoinCode($joinCode: String) {
    team(joinCode: $joinCode) {
      id
      name
      location
      description
      joinCode
      createdAt
      updatedAt
    }
  }
`
const JoinForm = (props) => {
  const { currentUser } = useAuth()
  const [joinCode, setjoinCode] = useState('')
  const [getTeams, { loading }] = useLazyQuery(QUERY, {
    onCompleted: (data) => {
      const teamToJoin = data.teams.find((team) => team.joinCode === joinCode)
      currentUser.teamId = teamToJoin.id
      return <Redirect to={routes.team({ id: currentUser.teamId })} />
    },
  })

  const onSubmit = (formData) => {
    setjoinCode(formData.joinCode)
    getTeams()
  }

  if (loading) return <p>Loading ...</p>

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="joinCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Team Code
        </Label>

        <TextField
          name="joinCode"
          defaultValue={props.team?.joinCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="joinCode" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Join Team
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JoinForm
