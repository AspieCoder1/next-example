import { Box, Typography, Button } from '@material-ui/core';

const Custom404 = () => {
	return (
		<Box textAlign='center'>
			<Typography variant='h1' component='h1' color='textPrimary'>
				404
			</Typography>
			<Typography variant='h2' component='h2' color='textSecondary'>
				Page not found
			</Typography>
			<Button href='/'>Go back home</Button>
		</Box>
	);
};

export default Custom404;
