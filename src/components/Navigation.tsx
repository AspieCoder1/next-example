import Drawer from '@material-ui/core/Drawer';
import NavLink from './navigation/NavLink';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawerContainer: {
			padding: '20px 30px',
		},
	})
);

const Navigation = ({ isOpen, setOpen }): JSX.Element => {
	const classes = useStyles();
	return (
		<Drawer anchor='left' open={isOpen} onClose={() => setOpen(false)}>
			<div className={classes.drawerContainer}>
				<NavLink href='/'>Home</NavLink>
				<NavLink href='/map'>Map</NavLink>
				<NavLink href='/chart'>Chart</NavLink>
				<NavLink href='/quiz'>Quiz</NavLink>
			</div>
		</Drawer>
	);
};

export default Navigation;
