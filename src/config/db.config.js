module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Shubham@1",
    DB: "mbtest2",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

// module.exports = {
//   HOST: "mbdatabase.ccdyxlthsocm.ap-south-1.rds.amazonaws.com",
//   USER: "admin",
//   PASSWORD: "123456789",
//   DB: "mbtest2",
//   dialect: "mysql",
//   port:3306,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };