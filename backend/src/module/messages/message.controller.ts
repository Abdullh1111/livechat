import { catchAsyncError } from "../../errorfolder/catchError";
import messageServic from "./message.servic";

const sentMassage = catchAsyncError(async (req, res) => {
    
    const result =await messageServic.SentMessage(req);
    
    res.status(200).json({
        success: true,
        message: "sent message successfully",
        data: result
    });

})

const getMessage = catchAsyncError(async (req, res) => {
    
    const result =await messageServic.getMessage(req);
    
    res.status(200).json({
        success: true,
        message: "Get message successfully",
        data: result
    });

})


export default {
    sentMassage,
    getMessage
}
