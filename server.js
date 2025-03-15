const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.use(errorHandler);
app.use(express.json());
app.use("/api/donor", require("./routes/donorRoute"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});