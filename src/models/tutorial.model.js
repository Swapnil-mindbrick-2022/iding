module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("data",{
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    fullname: {
      type: Sequelize.STRING
    },
    partyname: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    dateOfEstablished:{
      type: Sequelize.DATE
    },
    mobileNumber:{
      type: Sequelize.STRING
    }
  })
  


  return Tutorial;
  

};