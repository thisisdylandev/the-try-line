export const schema = gql`
  type Team {
    id: Int!
    name: String!
    location: String!
    description: String!
    joinCode: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teams: [Team!]! @requireAuth
    team(id: Int!): Team @requireAuth
  }

  input CreateTeamInput {
    name: String!
    location: String!
    description: String!
    joinCode: String!
  }

  input UpdateTeamInput {
    name: String
    location: String
    description: String
    joinCode: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team! @requireAuth
    updateTeam(id: Int!, input: UpdateTeamInput!): Team! @requireAuth
    deleteTeam(id: Int!): Team! @requireAuth
  }
`
