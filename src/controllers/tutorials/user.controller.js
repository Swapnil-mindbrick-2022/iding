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
    if (!req.body.emailid || !req.body.fullname || !req.body.password || !req.body.dob ) {
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
        // res.send(data);
        res.render('register.ejs')
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  }


  exports.login = (req, res) => {
    const id = req.body.id;
    if(!id){
      res.status(400).send({
        message: "Content can not be empty!"
      });
      

    }else{
      user.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });

    }
  
  };








