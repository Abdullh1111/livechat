import { Request} from "express";
import { appError } from "../../errorfolder/appError";
import { message } from "./message.model";

const SentMessage = async (payload: Request) => {
  try {
    const {messages,user} = payload.body
    
    const mainMessage = {...messages,from:user.id}
    
    const result = await message.create(mainMessage);
    
    return result;
  } catch (err: any) {
   throw new appError(err.message, 400);
  }
};

const getMessage = async (payload: Request) => {
    try {
        const {id} = payload.params;
        // console.log(id);
        
      const {user} = payload.body
      const result = await message.find({
        $or: [
          { from: user.id, to: id },
          { from: id, to: user.id }
        ]
      });
      // console.log(result);
      
      return result;
    } catch (err: any) {
    throw  new appError(err.message, 400);
    }
  };

export default {
    SentMessage,
    getMessage
}
