// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import TeamsLayout from 'src/layouts/TeamsLayout'
import WebLayout from './layouts/WebLayout/WebLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={WebLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
        <Private unauthenticated="login">
          <Set wrap={TeamsLayout}>
            <Route path="/teams/new" page={TeamNewTeamPage} name="newTeam" />
            <Route path="/teams/{id:Int}/edit" page={TeamEditTeamPage} name="editTeam" />
            <Route path="/teams/{id:Int}" page={TeamTeamPage} name="team" />
            <Route path="/teams" page={TeamTeamsPage} name="teams" />
          </Set>
        </Private>
      </Set>
    </Router>
  )
}

export default Routes
