// import { handleAuth } from '@auth0/nextjs-auth0';

import { handleAuth, handleCallback, Session, GetLoginState } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session, state: GetLoginState) => {
	// For the real app we basically just do a bit of code to get the correct namespace
	// Probably using the node environment variable
	let nameSpace = '';
	switch (process.env.NODE_ENV) {
		case 'development':
			nameSpace = 'http://localhost:3000';
			break;
		case 'test':
			nameSpace = 'http://localhost:3000';
			break;
		case 'production':
			nameSpace = 'https://next-example-eta.vercel.app';
			break;
	}

	session.user = { ...session.user, user_data: session.user[`${nameSpace}/user_data`] || {} };
	delete session.user[`${nameSpace}/user_data`];
	console.log(session);
	return session;
};

export default handleAuth({
	async callback(req, res) {
		try {
			await handleCallback(req, res, { afterCallback });
		} catch (error) {
			res.status(error.status || 500).end(error.message);
		}
	},
});
