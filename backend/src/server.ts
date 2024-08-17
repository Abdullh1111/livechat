import app from "./app";
import config from "./config";
const mongoose = require('mongoose');
const port = config.port;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://liveChat:abdullah4474032@abdullah.uuzkvyw.mongodb.net/liveChat?retryWrites=true&w=majority&appName=abdullah');
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
