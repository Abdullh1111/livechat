import app from "./app";
import config from "./config";
const mongoose = require("mongoose");
const port = config.port;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.dburl);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
