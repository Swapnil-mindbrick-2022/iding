
const CsvParser = require("json2csv").Parser;
const db = require("../../models");
const Tutorial = db.tutorials;
const readXlsxFile = require("read-excel-file/node");
const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

      //  row is an array of row . 
      // each row is aray of an cells .
    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();
      let tutorials = [];
      // Parse Excel file to data objects
      rows.forEach((row) => {
        let tutorial = {
          userID: row[0],
          fullname: row[1],
          partyname: row[2],
          state: row[3],
          dateOfEstablished: row[4],
          mobileNumber: row[5]


        }
        
        tutorials.push(tutorial);
      });
      
      Tutorial.bulkCreate(tutorials)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
const getTutorials = (req, res) => {
  Tutorial.findAll()
    .then((data) => {
      // res.send(data);
      res.render('alldata.ejs',{'data': data});
      
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
const download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];
    objs.forEach((obj) => {
      const { userID, fullname, partyname, state,dateOfEstablished,mobileNumber } = obj;
      tutorials.push({ userID, fullname, partyname, state,dateOfEstablished,mobileNumber });
    });
    const csvFields = ["userID", "fullname", "partyname", "state", "dateOfEstablished", "mobileNumber"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(tutorials);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");
    res.status(200).end(csvData);
  });
};
// const update= (req, res) => {

// }
module.exports = {
  upload,
  getTutorials,
  download
};

