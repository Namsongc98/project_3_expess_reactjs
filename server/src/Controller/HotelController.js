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
    cb(null, `${__dirname}/../public/hotelimg`);
  },
  filename: function (req, file, cb) {
    
    let ext = file.originalname.split(".")[1];
    const uniqueSuffix =
    Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
    cb(null, file?.fieldname + "-" + uniqueSuffix);
  },
});

let upload = multer({ storage: storage }).single("image_homestay");
const fileHotel = (req, res) => {
  upload(req, res, function (err) {
    const { name_homestay, city, qualityrom, desribe,price } = req.body;
    const imghotel = req.file.filename;
    const image_homestay = `http://localhost:8080/hotelimg/${imghotel}`;
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
      const id_homestay = uuidv4();
      try {
        const newHotel = [
          id_homestay,
          name_homestay,
          image_homestay,
          city,
          qualityrom,
          desribe,
          price
        ];
        const query =
          " insert into module_3.homestay (id_homestay,name_homestay,image_homestay,city,qualityrom,desribe,price) values (?)";
        connection.query(query, [newHotel], (err, result) => {
          if (err) {
            res.status(500).json({
              message: err,
            });
          } else {
            res.status(200).json({
              message: "tạo thành công",
              data: result,
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


//get id 
 const getHotelid = (req,res) =>{
  const{id}= req.params
  const query = "SELECT * FROM module_3.homestay where id_homestay = ?"
  connection.query(query,[id],(err,data)=>{
    if(err){
      res.status(500).json({
        message:"lỗi"
      })
    }else{
   
      res.status(200).json({
        message:"thành cồng",
        data:data
      })
    }
  })
 }


//city
 const getHotelCity = (req,res) =>{
  const{city}= req.body
  const query = "SELECT * FROM module_3.homestay where city = ?"
  connection.query(query,[city],(err,data)=>{
    if(err){
      res.status(500).json({
        message:"lỗi"
      })
    }else{
      res.status(200).json({
        message:"thành cồng",
        data:data
      })
    }
  })
 }

 //  updateHotel
 const updateHotel = (req,res)=>{
  upload(req, res, function (err) {
    const { name_homestay, city, qualityrom, desribe,price } = req.body;
   const {id}=req.params
    const imghotel = req.file.filename;
    const image_homestay = `http://localhost:8080/hotelimg/${imghotel}`;
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
        const id_homestay = id;
       
        const updateHotel = [
          name_homestay,
          image_homestay,
          city,
          qualityrom,
          desribe,
          price,
          id_homestay
        ];
        const query =
          " UPDATE module_3.homestay SET name_homestay = ?, image_homestay = ?, city = ?, qualityrom = ?, desribe= ?, price= ? WHERE id_homestay = ? ";
        connection.query(query, updateHotel, (err, result) => {
          if (err) {
        
            res.status(500).json({
              message: err,
            });
          } else {

            res.status(200).json({
              message: "tạo thành công",
              data: result,
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

 }



// delete hotel
const deleteHotel = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM module_3.homestay WHERE id_homestay = ?";
  connection.query(query, [id], (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Xóa thành công",
      });
    }
  });
};
const gethoteDetal = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM module_3.homestay where id_homestay = ?";
  connection.query(query, [id], (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      res.status(200).json({
        message: " thành công",
        data:data
      });
    }
  });
};



module.exports = {
  getHotel: getHotel,
  fileHotel: fileHotel,
  deleteHotel: deleteHotel,
  getHotelid:getHotelid,
  getHotelCity:getHotelCity,
  updateHotel:updateHotel,
  gethoteDetal:gethoteDetal
};
