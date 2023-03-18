import { Link, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';

const Page1 = ({ routes }) => {
	const menu = [
		{
			path: '/home/page1/subpage1',
			name: 'Subpage 1',
		},
		{
			path: '/home/page1/subpage2',
			name: 'Subpage 2',
		},
	];

	return (
		<div className='page-main'>
			<div className='navbar'>
				<ul>
					{menu.map((menuItem) => (
						<li key={menuItem.name}>
							<Link to={menuItem.path}>{menuItem.name}</Link>
						</li>
					))}
				</ul>
			</div>

			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}

				{/* <Route path="path: '/home/page1/subpage1" render={(props)=><Subpage1 {...props} routes={[]}/>}
                <Route path="path: '/home/page1/subpage2" render={(props)=><Subpage2 {...props} routes={[]}/>} */}
				
			</Switch>
		</div>
	);
};

export default Page1;

// [
// 	{
// 		path: '/home/page1/subpage1',
// 		component: Subpage1,
// 	},
// 	{
// 		path: '/home/page1/subpage2',
// 		component: Subpage2,
// 	},
// ],


