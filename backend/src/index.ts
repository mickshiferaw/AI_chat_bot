import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

app.post("/", (req, res, next) => {
  console.log(req.body.name);
});

//connections and listners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("server open and connected to database")
    );
  })
  .catch((err) => console.log(err));
