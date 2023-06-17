const connection = require("../concectDatabase");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const getProfile = (req, res) => {
  const query = "SELECT * FROM module_3.profile;";
  connection.query(query, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "thất bại",
      });
    } else {
      res.status(200).json({
        message: "thành công",
        data: data,
      });
    }
  });
};


const getProfileLogin = (req, res) => {
  const { id } = req.params;
  const query =
    "select *  from  module_3.profile as p  join module_3.users as u  on p.id_user = u.id_user where p.id_user =(?)";
  connection.query(query, id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "lỗi không lấy được giữ liệu",
      });
    } else {
      res.status(200).json({
        message: "thêm thành công",
        data: data,
      });
    }
  });
};


const getProfileUser = (req, res) => {
  const query =
    "select * from module_3.profile join module_3.homestay where id_user = ?";
  connection.query(query, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "thất bại",
      });
    } else {
      res.status(200).json({
        message: "thành công",
        data: data,
      });
    }
  });
};


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/profileImg`);
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[1];
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});


let upload = multer({ storage: storage }).single("avartar_user");
const postProfile = (req, res) => {
  upload(req, res, function (err) {
    const {
      name_user,
      phone_user,
      date_user,
      age,
      adress_user,
      gender,
      id_user,
    } = req.body;
    const avarta = req.file.filename;
    const avartar_user = `http://localhost:8080/profileImg/${avarta}`;
    if (err instanceof multer.MulterError) {
      res.status(400).json({
        message: "lỗi khi tải lên",
        data: err,
      });
    } else if (err) {
      res.status(400).json({
        messager: "lỗi không xác định",
        data: err,
      });
    } else {
      try {
        const id_profile = uuidv4();
        const newProfile = [
          id_profile,
          name_user,
          phone_user,
          adress_user,
          age,
          gender,
          id_user,
          date_user,
          avartar_user,
        ];
        const query =
          " insert into module_3.profile (id_profile,name_user,phone_user,adress_user,age,gerder,id_user,date_user,avartar_user) values (?)";
        connection.query(query, [newProfile], (err, data) => {
          if (err) {
            res.status(500).json({
              message: err,
            });
          } else {
            res.status(200).json({
              message: "tạo thành công",
              data: data,
            });
          }
        });
      } catch (error) {
        res.status(500).json({
          message: "lỗi",
          data: error,
        });
      }
    }
  });
};

module.exports = {
  getProfile,
  postProfile,
  getProfileUser,
  getProfileLogin
};
