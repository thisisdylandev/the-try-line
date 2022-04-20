import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

export const QUERY = gql`
  query FindTeams {
    teams {
      id
      name
      location
      description
      createdAt
      updatedAt
    }
  }
`
const JoinForm = (props) => {
  const [joinCode, setjoinCode] = useState('')
  const [getTeams, { loading }] = useLazyQuery(QUERY, {
    onCompleted: (data) => {
      console.log(data.teams)
    },
  })

  const onSubmit = (formData) => {
    console.table(formData)
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
