import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../libs/posts';
import Head from 'next/head';
import Moment from 'react-moment';
import { Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Link from 'next/link';
// import utilStyles from '../../styles/utils.module.css';

export const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
};

const Post = ({ postData }) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<Typography variant='h4' component='h1'>
					{postData.title}
				</Typography>
				<Typography color='textSecondary'>
					<Moment format={'MMMM d, YYYY'} date={postData.date} />
				</Typography>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				<Link href='/'>
					<KeyboardBackspaceIcon fontSize='large' />
				</Link>
			</article>
		</Layout>
	);
};

export default Post;
