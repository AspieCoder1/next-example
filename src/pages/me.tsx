import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { CircularProgress, Typography } from '@material-ui/core';

import Layout from '../components/Layout';

const Me = (): JSX.Element => {
	const { user, error, isLoading } = useUser();
	console.log(user);

	if (isLoading) {
		return (
			<Layout>
				<CircularProgress />
			</Layout>
		);
	}

	if (error) {
		return (
			<Layout>
				<Typography>{error.message}</Typography>
			</Layout>
		);
	}

	if (user) {
		return (
			<Layout>
				<Typography variant='h4' component='h1'>
					Hello, {user.name}
				</Typography>
			</Layout>
		);
	}
};

export default withPageAuthRequired(Me);
