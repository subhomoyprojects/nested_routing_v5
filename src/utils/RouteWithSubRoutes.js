import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			render={(props) => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
};

export default RouteWithSubRoutes;


{/* <Route path="/home" render={(props)=><Home {...props} routes={[
	{
		path: '/home/page1/subpage1',
		component: Subpage1,
	},
	{
		path: '/home/page1/subpage2',
		component: Subpage2,
	},
]}/>} */}
