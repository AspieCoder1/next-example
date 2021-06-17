import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import Moment from 'react-moment';

type Props = {
	id: string;
	date: string;
	title: string;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(2),
		},
	})
);

const BlogItem = ({ id, date, title }: Props): JSX.Element => {
	const styles = useStyles();

	return (
		<Grid item>
			<Link href={`/posts/${id}`} passHref>
				<Paper>
					<div className={styles.root}>
						<Typography variant='h6'>{title}</Typography>
						<Typography color='textSecondary'>
							<Moment format={'MMMM d, YYYY'} date={date} />
						</Typography>
					</div>
				</Paper>
			</Link>
		</Grid>
	);
};

export default BlogItem;
