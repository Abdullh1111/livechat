import dotenv from "dotenv";
dotenv.config();
export default {
  port: process.env.PORT,
  dburl: process.env.URL,
  hash: process.env.HASH,
  jwt_secret: process.env.JWT_SECRET,
};
