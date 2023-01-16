const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json());

// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));

app.get('/api/games', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/addGame', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  const start = async () => {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/mongoose?authSource=admin"
          );
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  start();