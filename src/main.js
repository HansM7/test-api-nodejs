import express from "express";

const app = express();

app.use(express.json());

const router = express.Router();

router.get("/api", (req, res) => {
  res.json({ message: "Hello" });
});

app.use("", router);

app.listen(4000);
