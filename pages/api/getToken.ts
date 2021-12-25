import Twitter from 'twitter-lite';

const client = new Twitter({
  consumer_key: process.env.APIKEY,
  consumer_secret: process.env.APISECRETKEY,
});

export default async (req, res) => {
  const { method } = req;

  if (method === 'POST') {
    try {
      const data = await client.getRequestToken(
        'http://localhost:3000/connect'
      );

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
