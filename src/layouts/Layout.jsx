import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import { BACKGROUNDS } from '../constants/backgrounds';
import { StyledLayout } from './layout.styles';

const Layout = () => {
	const { pathname } = useLocation();

	const backgrounds = getBackgroundImages(pathname);

	return (
		<StyledLayout $backgrounds={backgrounds}>
			<Menu />
			<Outlet />
		</StyledLayout>
	);
};

const getBackgroundImages = path => {
	if (path === '/') return BACKGROUNDS.HOME;

	const finalPath = path.substring(1).toUpperCase();

	return BACKGROUNDS[finalPath];
};

export default Layout;
