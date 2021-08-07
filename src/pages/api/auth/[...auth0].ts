// import { handleAuth } from '@auth0/nextjs-auth0';

import { handleAuth, handleCallback, Session, GetLoginState } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session, state: GetLoginState) => {
	session = { ...session, user_data: session['http://next-example-eta.vercel.app/user_data'] };
	delete session['http://next-example-eta.vercel.app/user_data'];
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
