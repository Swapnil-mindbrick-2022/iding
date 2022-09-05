// const { request } = require("express");
const db = require("../../models");

const user = db.users




// exports.create=(req,res)=>{

//     if(!req.body.fullname || !req.body.email || !req.body.dob || !req.body.password){
//         res.status(400).send({message:"all fields are mandetory"})
//     }
//     return
// }
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fullname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const userdata = {
      fullname: req.body.fullname,
      emailid: req.body.emailid,
      dob: req.body.dob,
      password: req.body.password


    };
    // Save Tutorial in the database
    user.create(userdata)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  }


  exports.registerpage = (req,res)=>{
    res.render(path.join(__dirname, "./views/register.ejs"));
  }
//   function getuserdata() {
//     return{
//         async getregister (req,res){
//             res.render('register.ejs')


//         }

//     }
   

//     }

// module.exports = getuserdata;
  




