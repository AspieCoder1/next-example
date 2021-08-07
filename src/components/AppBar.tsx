import React, { useState } from 'react';
import { AppBar as MaterialAppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useUser } from '@auth0/nextjs-auth0';

import Navigation from './Navigation';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolBar: {
			marginBottom: theme.spacing(4),
		},
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		drawerContainer: {
			padding: '20px 30px',
		},
	})
);

const AppBar = ({ siteTitle }) => {
	const classes = useStyles();

	const [isOpen, setOpen] = useState<boolean>(false);
	const { user } = useUser();

	return (
		<MaterialAppBar position='sticky' className={classes.toolBar}>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
					onClick={() => setOpen(true)}
				>
					<MenuIcon />
				</IconButton>
				<Navigation isOpen={isOpen} setOpen={setOpen} />
				<Typography className={classes.title} variant='h6'>
					{siteTitle}
				</Typography>
				<Button color='inherit' href={!!user ? '/api/auth/logout' : '/api/auth/login'}>
					{!!user ? 'Logout' : 'Login'}
				</Button>
			</Toolbar>
		</MaterialAppBar>
	);
};

export default AppBar;
