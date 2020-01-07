import * as express from 'express';
const port = process.env.PORT || 8080;
const apiRouter = require("./routes/index");
const app = express();
import * as path from "path";

app.use(express.static('public'));
app.use(express.json());

app.use("/api", apiRouter);

app.use("*", (req,res) => {
    res.sendFile(path.join(__dirname , "../public/index.html"));
});
app.listen( port , () => {
    console.log(`We are live at http://localhost:${port}`);
});


