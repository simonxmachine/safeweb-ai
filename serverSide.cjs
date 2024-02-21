const express = require('express');
const { Analytics } = require('@segment/analytics-node');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'https://www.safeweb.ai', // Adjust origin as needed
  optionsSuccessStatus: 200, // Explicitly define allowed methods, headers, etc.
}));
const port = 3000; // Customize port if needed
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const analytics = new Analytics({ writeKey: 'u4hbGHBJ3a2Rl3oXLem6I5YxsomyFF3l' }); // Replace with your Segment write key


app.post('/', async (req, res) => {
  try {
    const { name, address, email } = req.body;
    console.log(name, address, email);

    analytics.track({
      anonymousId: '48d33523bb-95c3-4f8d-af97-86b2b404dcfe',
      event: 'Item Purchased',
      properties: {
        revenue: 39.95,
        shippingMethod: '2-day', 
        name: name,
        address: address,
      }
    });
    

    res.json({ message: 'Form submission successful!' });
  } catch (error) {
    console.error('Error tracking event:', error);
    res.status(500).json({ error: 'Failed to track event' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});