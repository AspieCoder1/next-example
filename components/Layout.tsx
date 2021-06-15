import React, { useState } from 'react';
import Head from 'next/head';
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	IconButton,
	Button,
	MenuItem,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from './Navigation';

const name = 'Luke Braithwaite';
export const siteTitle = 'Next.js Sample Website';

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

const Layout = ({ children }): JSX.Element => {
	const classes = useStyles();

	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<AppBar position='sticky' className={classes.toolBar}>
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
						A Next.js test site
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
