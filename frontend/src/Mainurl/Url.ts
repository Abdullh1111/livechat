import { io } from "socket.io-client";
const baseUrl = "https://livechat-backend-h4zd.onrender.com"
export const url = `${baseUrl}/api/v1`;
export const socket = io(baseUrl);

