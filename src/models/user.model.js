module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("userdata",{
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    fullname: {
      type: Sequelize.STRING
    },
    emailid: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATE
    },
   
    password:{
      type: Sequelize.STRING
    }
  })
  


  return user;
  

};