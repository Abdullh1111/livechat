import app, { url } from "./app";
import config from "./config";
import { Server } from "socket.io";
import { appError } from "./errorfolder/appError";
const mongoose = require("mongoose");

const port = 3000;

main().catch((err) => new appError(err, 400));

async function main() {
  // Connect to MongoDB
  await mongoose.connect(config.dburl);

  // Start the Express app
  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  // Attach socket.io to the server (after app.listen())
  const io = new Server(server, {
    pingTimeout: 600000,
    cors: {
      origin: url,
      credentials: true,
    },
  });

  // Set up socket.io connection event
  io.on("connection", (socket) => {
    socket.on("setup", (data) => {
      // console.log(data);
      
      if (data._id) {
        socket.join(data._id);
        console.log(`join ${data._id}`);
  
        const sendMessageHandler = (data: any) => {
          // console.log(data);
          // console.log(data);
          
          socket.in(data.to).emit("newmessage", data);
        };
  
        socket.on("send message", sendMessageHandler);
  
        // Remove the event listener when the socket disconnects
        // socket.on("disconnect", () => {
        //   socket.off("send message", sendMessageHandler);
        // });
      }
    });
  });
}
