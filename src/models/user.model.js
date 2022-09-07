module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("userdata",{
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    fullname: {
      type: Sequelize.STRING,
      required: true
    },
    emailid: {
      type: Sequelize.STRING,
      required: true
    },
    dob: {
      type: Sequelize.DATE,
      required: true
    },
   
    password:{
      type: Sequelize.STRING,
      required: true

    }
  })
  


  return user;
  

};