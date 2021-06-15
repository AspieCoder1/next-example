import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Grid, Card, Typography, Paper } from '@material-ui/core';
import BlogItem from '../components/blog/BlogItem';

import { getSortedPostsData } from '../libs/posts';
import Moment from 'react-moment';

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
			{/* <Head>
				<title>{siteTitle}</title>
			</Head> */}
			{/* <section className={utilStyles.headingMd}>
				<p>Random next sample project</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section> */}
			<Typography variant='h4'>My Posts</Typography>
			<Grid>
				{allPostsData.map(({ id, date, title }) => (
					<BlogItem id={id} date={date} title={title} />
				))}
			</Grid>
		</Layout>
	);
};

export default Home;
