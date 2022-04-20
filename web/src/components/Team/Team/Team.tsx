const Team = ({ team }) => {
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
    </>
  )
}

export default Team
