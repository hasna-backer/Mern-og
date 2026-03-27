const express      = require("express");
const app          = express();

const userRoutes    = require("./routes/userRoutes");
const postRoutes    = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoutes    = require("./routes/likeRoutes");

app.use(express.json());

app.use("/users",  userRoutes);
app.use("/posts",  postRoutes);
app.use("/posts",  commentRoutes);
app.use("/posts",  likeRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
