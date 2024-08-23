import app from "./app";
import config from "./config";
import { Server } from "socket.io";
import { appError } from "./errorfolder/appError";
const mongoose = require("mongoose");

const port = config.port;

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
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  // Set up socket.io connection event
  io.on("connection", (socket) => {
    // console.log("A user connected");
    socket.on("setup", (data) => {
      if (data.id) {
        socket.join(data.id);
        // console.log(`join ${data.id}`);

        
      }
      
    });
    socket.on("send message", (data) => {
      // console.log(data);
      socket.in(data.to).emit("newmessage",data)
    });
  });
}
