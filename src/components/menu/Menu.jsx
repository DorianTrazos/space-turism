import { useState } from 'react';
import { MENU_INFO } from '../../constants/menu';
import { StyledHamburger, StyledLink, StyledMenu } from './menu.styles';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuImage = isOpen ? 'icon-close.svg' : 'icon-hamburger.svg';
	return (
		<>
			<StyledHamburger
				src={`/assets/shared/${menuImage}`}
				alt=''
				onClick={() => setIsOpen(!isOpen)}
			/>
			<nav>
				<StyledMenu $isOpen={isOpen}>
					{MENU_INFO.map(item => (
						<li key={item.id}>
							<StyledLink to={item.path} onClick={() => setIsOpen(false)}>
								{item.number} {item.title}
							</StyledLink>
						</li>
					))}
				</StyledMenu>
			</nav>
		</>
	);
};

export default Menu;
