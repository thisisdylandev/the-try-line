import TeamCell from 'src/components/Team/TeamCell'

type TeamPageProps = {
  id: number
}

const TeamPage = ({ id }: TeamPageProps) => {
  return (
    <>
      <TeamCell id={id} />
      <h2 className="rw-heading rw-heading-primary font-jersey">Players</h2>
    </>
  )
}

export default TeamPage
