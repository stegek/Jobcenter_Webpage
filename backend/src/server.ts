import express from "express";


const app = express();
const port = 5000;


app.listen(port, () => {
    console.log(`running on port ${port}`);
});