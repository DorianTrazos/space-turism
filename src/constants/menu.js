import { v4 } from 'uuid';

export const MENU_INFO = [
	{
		id: v4(),
		path: '/',
		number: '00',
		title: 'HOME'
	},
	{
		id: v4(),
		path: '/destination',
		number: '01',
		title: 'DESTINATION'
	},
	{
		id: v4(),
		path: '/crew',
		number: '02',
		title: 'CREW'
	},
	{
		id: v4(),
		path: '/technology',
		number: '03',
		title: 'TECHONOLOGY'
	}
];
