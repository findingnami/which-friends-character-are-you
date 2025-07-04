const express = require('express');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email, first_name } = req.body;

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
        send_welcome_email: true
      })
    });

    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error('❌ Beehiiv returned non-JSON response:', text);
      return res.status(500).json({ error: 'Beehiiv did not return valid JSON', raw: text });
    }

    res.status(response.status).json(data);
  } catch (error) {
    console.error('❌ Subscription failed:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ✅ Use Render’s dynamic port and bind to 0.0.0.0 for compatibility
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running at http://0.0.0.0:${PORT}`);
});
