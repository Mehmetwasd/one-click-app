const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/test', (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

app.post('/api/start', (req, res) => {
  console.log("Project started 🔥");

  res.json({
    message: "Project started 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});