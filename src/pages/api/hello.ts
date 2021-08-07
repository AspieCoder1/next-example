// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const Hello = (_req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ name: 'John Doe' });
};

export default Hello;
