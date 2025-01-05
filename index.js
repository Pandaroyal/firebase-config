const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const db = require('./firebase');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Example route to get data from Firestore
app.get('/data', async (req, res) => {
  try {
    const snapshot = await db.collection('user').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Example route to add data to Firestore
app.post('/data', async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection('user').add(data);
    res.status(201).json({ message: 'Data added successfully', id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: 'Error adding data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
