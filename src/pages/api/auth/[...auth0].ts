import { handleAuth, handleCallback, Session, AfterCallback } from '@auth0/nextjs-auth0';

const afterCallback: AfterCallback = async (_req, _res, session: Session) => {
	let nameSpace = 'https://next-example-eta.vercel.app';
	session.user = { ...session.user, user_data: session.user[`${nameSpace}/user_data`] || {} };
	delete session.user[`${nameSpace}/user_data`];
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
