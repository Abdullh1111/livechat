import { v2 as cloudinary } from "cloudinary";
import config from "../config";
import { NextFunction, Request, Response } from "express";

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.cloud_api_key,
  api_secret: config.cloud_api_secret,
});


export const uploadCloud = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req.file,req.body);
  
      try{
        if (req.file) {
          // console.log("hello");
          // console.log(req.file);
          
          const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "live_chat",
          });
          // console.log(result);        
          req.body = { ...req.body, profileImg: result.secure_url };
        }
        next();
      }catch(err){
        next(err)
      }
      
    }
  