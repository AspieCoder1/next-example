import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import BlogItem from '../components/blog/BlogItem';

import { getSortedPostsData } from '../libs/posts';
import Layout from '../components/Layout';

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
const Home = ({ allPostsData }) => {
	return (
		<Layout>
			<Typography variant='h4'>My Posts</Typography>
			<Grid container spacing={2} direction='column'>
				{allPostsData.map(({ id, date, title }) => (
					<BlogItem key={id} id={id} date={date} title={title} />
				))}
			</Grid>
		</Layout>
	);
};

export default Home;
