import Nav from 'src/components/Nav/Nav'
import { useLocation } from '@redwoodjs/router'

type WebLayoutProps = {
  children?: React.ReactNode
}

const WebLayout = ({ children }: WebLayoutProps) => {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return (
      <>
        <main>{children}</main>
      </>
    )
  }
  return (
    <>
      <Nav />
      <main className="m-auto max-w-4xl p-8">{children}</main>
    </>
  )
}

export default WebLayout
