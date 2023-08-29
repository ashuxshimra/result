const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// const username = "admin";
// const password = "admin123";
// const cluster = "Cluster0";
// const dbname = "db";
// mongodb+srv://admin:admin123@cluster.bzzidpc.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://work:work@cluster0.igyuccb.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db connection successful"))
  .catch((error) => {
    console.log("error in db connection", error);
    process.exit(1);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
