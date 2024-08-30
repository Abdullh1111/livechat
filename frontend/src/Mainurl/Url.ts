import { io } from "socket.io-client";
const baseUrl = "http://localhost:3000"
export const url = `${baseUrl}/api/v1`;
export const socket = io(baseUrl);

