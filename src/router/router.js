import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Login } from '../pages/login/login'
import { Main } from '../pages/main/main'

export const Routes = () => {
	return (
		<Router>
			<Switch>
				{/* <Route exact path='/'>
					<Login />
				</Route> */}
				<Route exact path='/proyecto4'>
					<Main />
				</Route>
				<Route>
					<h1>Esta pagina no existe! Volve al home</h1>
				</Route>
			</Switch>
		</Router>
	)
}
