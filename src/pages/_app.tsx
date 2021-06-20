import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { UserProvider } from '@auth0/nextjs-auth0';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../libs/theme';

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</ThemeProvider>
	);
};

export default MyApp;
