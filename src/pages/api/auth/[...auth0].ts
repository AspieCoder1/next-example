// import { handleAuth } from '@auth0/nextjs-auth0';

import { handleAuth, handleCallback, Session, GetLoginState } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session, state: GetLoginState) => {
	session.user = { ...session.user, user_data: session.user['http://next-example-eta.vercel.app/user_data'] };
	delete session.user['http://next-example-eta.vercel.app/user_data'];
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
