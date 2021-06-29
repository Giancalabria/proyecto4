import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from '../pages/login/login'
import { Main } from '../pages/main/main'
import { Main2 } from '../pages/main2.js/main2'
export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>
				<Route exact path='/main'>
					<Main />
				</Route>
				<Route exact path='/main2'>
					<Main2 />
				</Route>
				<Route>
					<h1>Esta pagina no existe! Volve al home</h1>
				</Route>
			</Switch>
		</Router>
	)
}
