import express from "express";
import { json } from "body-parser";
import cors from "cors";
import jobrouters from "./routes/jobroutes";


const app = express();
const port = 5000;

app.use(json());
app.use(cors());
app.use(jobrouters);


app.listen(port, () => {
    console.log(`running on port ${port}`);
});