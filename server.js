const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/getDisaster_api', async (req, res) => {
  const query = new URLSearchParams(req.query).toString();
  const url = `http://apis.data.go.kr/B552468/disaster_api/getDisaster_api?${query}`;

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (e) {
    res.status(500).json({ error: 'Proxy Error', details: e.toString() });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
