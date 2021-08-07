import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

const token = async (req: NextApiRequest, res: NextApiResponse) => {
	const result = await getAccessToken(req, res);

	if (result.accessToken) {
		res.status(200).json({ token: result.accessToken });
	} else {
		res.status(400).json({ error: 'oops sometgin went wrong' });
	}
};

export default withApiAuthRequired(token);
