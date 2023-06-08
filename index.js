const app = require('./app');
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.port || 8000;

// Connect to DB and start server
mongoose
  .connect(process.env.DATABASE, { autoIndex: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

