import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';

const firstPost = (): JSX.Element => {
	return (
		<Layout home={false}>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href='/'>
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
};

export default firstPost;
