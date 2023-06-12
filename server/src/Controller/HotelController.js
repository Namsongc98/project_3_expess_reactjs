const connection = require("../concectDatabase");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const getHotel = (req, res) => {
  const query = "SELECT * FROM module_3.homestay";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Thành Công",
        data: result,
      });
    }
  });
};

// config store
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../Public/upload`);
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[1];
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

let uploadMany = multer({ storage: storage }).array("photos", 5);
const manyFile = (req, res, next) => {
  console.log('38----------',req.body);
  uploadMany(req, res, function (err) {
    console.log('40----------',req.body);
    if (err instanceof multer.MulterError) {
      console.log(req);
      res.json({
        messager: "lỗi khi tải lên",
        err,
      });
    } else if (err) {
      res.json({
        messager: "lỗi không xác định",
        err,
      });
    }
    next();
  });
};
const postHotel = (req, res) => {
  const { name_homestay, image_homestay, city, qualityrom, desribe } = req.body;
  const id_homestay = uuidv4();
  const newUser = [
    id_homestay,
    name_homestay,
    image_homestay,
    city,
    qualityrom,
    desribe,
  ];
  const query =
    " insert into module_3.homestay (id_homestay,name_homestay,image_homestay,city,qualityrom,desribe) values (?)";
  connection.query(query, [newUser], (err,result) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
    } else {
      res.status(200).json({
        message: "tạo thành công",
        data:result
      });
    }
  });
};

module.exports = {
  getHotel: getHotel,
  manyFile: manyFile,
  postHotel: postHotel,
};
