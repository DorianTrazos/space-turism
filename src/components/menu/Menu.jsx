import { MENU_INFO } from '../../constants/menu';
import { StyledLink } from './menu.styles';

const Menu = () => {
	return (
		<nav>
			<ul>
				{MENU_INFO.map(item => (
					<li key={item.id}>
						<StyledLink to={item.path}>
							{item.number} {item.title}
						</StyledLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
