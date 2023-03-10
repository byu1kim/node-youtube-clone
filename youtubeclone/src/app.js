import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();

// Middlewares

// View engine
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// Morgan
const logger = morgan("dev");
app.use(logger);

// Routers
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// Listen to the server
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);

// sending is request, server is listening the request, when web is showing you something is response
