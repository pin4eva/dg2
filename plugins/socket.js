import io from "socket.io-client";
const socket = io(process.env.baseUrl);

export default socket;
