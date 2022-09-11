const passport = require("passport");
const excelController = require("../controllers/tutorials/excel.controller");
const userController = require('../controllers/tutorials/user.controller')

const upload = require("../middlewares/upload");
let userRoute = (app) => {
  app.post("/upload", upload.single("xlsx"), excelController.upload);
  app.get("/getalldata", excelController.getTutorials);
  app.get("/download", excelController.download);
  app.post("/register", userController().postRegister);  // post to register user
  app.post('/login',passport.authenticate('local',{successRedirect:'/getalldata',failureRedirect:'/login'}));
  app.get('/register',(req,res)=>{
    res.render('register.ejs')
  })
//get login
app.get('/login',(req,res)=>{
  res.render('login')
})
   
};
module.exports = userRoute;

