import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up and running");
  console.log("Get req");
});

export default router;
