import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from "../pages/login"


export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>
				<Route>
					<h1>Esta pagina no existe! Volve al home</h1>
				</Route>
			</Switch>
		</Router>
	)
}
