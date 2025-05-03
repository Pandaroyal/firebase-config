require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Example schema
const User = mongoose.model('User', { name: String });

// API Routes
app.get('/', (req, res) => res.send('API is working'));

app.post('/users', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send(user);
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
