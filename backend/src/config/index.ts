import dotenv from "dotenv";
dotenv.config();
export default {
  port: process.env.PORT,
  dburl: process.env.URL,
  hash: process.env.HASH,
  jwt_secret: process.env.JWT_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_api_key: process.env.CLOUDINARY_API_KEY,
  cloud_api_secret: process.env.CLOUDINARY_API_SECRET
};
