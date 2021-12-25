import Twitter from 'twitter-lite';

const client = new Twitter({
  consumer_key: process.env.APIKEY,
  consumer_secret: process.env.APISECRETKEY,
});

export default async (req, res) => {
  const { body, method } = req;

  if (method === 'POST') {
    try {
      const oauthVerifier = body.oauth_verifier;
      const oauthToken = body.oauth_token;
      const data = await client.getAccessToken({
        oauth_verifier: oauthVerifier,
        oauth_token: oauthToken,
      });

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send('Not found');
};
