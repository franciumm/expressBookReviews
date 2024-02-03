import express  from "express"
import bootstrape from "./src/index.router.js";
import DBConnect from "./DB/DB.connect.js";

const app = express();

app.listen(5000,()=>{console.log(`Server Running ${5000}`);});
bootstrape(app,express);