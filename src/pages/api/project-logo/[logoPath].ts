import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  if (req.method === 'GET') {
    const { logoPath } = req.query;
    const response = await fetch(
      `${process.env.SERVER_BASE_URL}/api/v1/projects/project-logo/${logoPath}`,
      {
        method: 'GET',
      }
    );

    if (response.ok) {
      response.body?.pipe(res);
    }
  }
}
