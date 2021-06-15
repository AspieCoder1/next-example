import React from 'react';
import Link from 'next/link';
import { MenuItem } from '@material-ui/core';

const NavLink = ({ href, children }) => {
	return (
		<Link href={href}>
			<MenuItem>{children}</MenuItem>
		</Link>
	);
};

export default NavLink;
