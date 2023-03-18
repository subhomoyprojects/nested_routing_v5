import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import routes from './Routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';
import Home from './Home';
import Login from './Login';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Subpage1 from './pages/subpages/Subpage1';
import Subpage2 from './pages/subpages/Subpage2';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact from='/' to='/login' />
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
