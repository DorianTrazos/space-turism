import Menu from '../menu/Menu';
import { StyledHeader } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<img src='/assets/shared/logo.svg' alt='' />
			<Menu />
		</StyledHeader>
	);
};

export default Header;
