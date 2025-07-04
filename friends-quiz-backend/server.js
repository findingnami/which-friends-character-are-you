const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email, first_name, coffee_preference } = req.body;

  try {
    const response = await fetch('https://api.beehiiv.com/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`
      },
      body: JSON.stringify({
        email,
        first_name,
        custom_fields: { coffee_preference },
        send_welcome_email: true
      })
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Subscription failed:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server is running at http://localhost:${PORT}`));
