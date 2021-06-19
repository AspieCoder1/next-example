import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';

import BlogItem from '../components/blog/BlogItem';
import { getSortedPostsData } from '../libs/posts';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heading: {
			marginBottom: theme.spacing(2),
		},
	})
);

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

const Home = ({ allPostsData }) => {
	const styles = useStyles();

	return (
		<Layout>
			<Head>
				<title>Home page</title>
			</Head>
			<Typography variant='h4' className={styles.heading} component='h1'>
				My Posts
			</Typography>
			<Grid container spacing={2} direction='column'>
				{allPostsData.map(({ id, date, title }) => (
					<BlogItem key={id} id={id} date={date} title={title} />
				))}
			</Grid>
		</Layout>
	);
};

export default Home;
