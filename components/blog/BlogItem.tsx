import { Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import Moment from 'react-moment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
		},
	})
);

const BlogItem = ({ id, date, title }): JSX.Element => {
	const styles = useStyles();

	return (
		<Link href={`/posts/${id}`}>
			<Paper>
				<div className={styles.root}>
					<Typography variant='h6'>{title}</Typography>
					<Typography color='textSecondary'>
						<Moment format={'MMMM d, YYYY'} date={date} />
					</Typography>
					<Typography></Typography>
				</div>
			</Paper>
		</Link>
	);
};

export default BlogItem;
