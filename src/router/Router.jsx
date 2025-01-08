import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Crew from '../pages/crew/Crew';
import Destination from '../pages/destination/Destination';
import Home from '../pages/home/Home';
import Technology from '../pages/technology/Technology';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/destination' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
				<Route path='/technology' element={<Technology />} />
			</Route>
		</Routes>
	);
};

export default Router;
