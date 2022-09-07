const { urlencoded } = require("body-parser");
const express = require("express");
const router = express.Router();
const excelController = require("../controllers/tutorials/excel.controller");
const userController = require("../controllers/tutorials/user.controller");

const upload = require("../middlewares/upload");
let routes = (app) => {
  router.post("/upload", upload.single("xlsx"), excelController.upload);
  router.get("/getalldata", excelController.getTutorials);
  router.get("/download", excelController.download);
  router.post("/register", userController.create);  // post to register user
  router.post('/login',userController.login);
  // router.get('/register',userController.registerpage)
  router.get("/register", function (req, res) {
    res.render("register.ejs")
  });
  // router.get('/alldata',function (req, res) { 
    
  //   res.render("alldata.ejs")
  //  })
   
  
  app.use("/api", router);
};
module.exports = routes;