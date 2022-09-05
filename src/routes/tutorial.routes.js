const { urlencoded } = require("body-parser");
const express = require("express");
const router = express.Router();
const excelController = require("../controllers/tutorials/excel.controller");
const userController = require("../controllers/tutorials/user.controller");

const upload = require("../middlewares/upload");
let routes = (app) => {
  router.post("/upload", upload.single("xlsx"), excelController.upload);
  router.get("/tutorials", excelController.getTutorials);
  router.get("/download", excelController.download);
  router.post("/register", userController.create);
  // router.get('/register',userController.registerpage)
  
  app.use("/api", router);
};
module.exports = routes;