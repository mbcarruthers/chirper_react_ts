import * as express from 'express';
const port = process.env.PORT || 8080;
const apiRouter = require("./routes/index");
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use("/api", apiRouter);

app.listen( port , () => {
    console.log(`We are live at http://localhost:${port}`);
});


