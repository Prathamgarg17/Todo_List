const models = require("../model/model");

const getAlldata = async (req, res) => {
  try {
        const Data = await models.find({});
        res.status(200).json({ data: Data });
  } catch (error) {
    res.json(404).json({ masg: error });
  }

//   res.send("all data will be here");
};
const getdata = async (req, res) => {
    const id=req.query.Id;
    try {
        const Data = await models.findById(id);
        res.status(200).json({ data: Data });
    } catch (error) {
        res.json(404).json({ masg: error });
    }
  
};

const createdata = async (req, res) => {
// console.log(req.query);
  try {
      const Data = await models.create(req.body);
      res.status(200).json({ data: Data });
  } catch (error) {
     res.json(404).json({ masg: error });
  }
    
 
};

const updatedata = async (req, res) => {
    const id=req.query.Id;
    const info=req.body;
    // const options={new:true};
    try {
       const Data = await models.findByIdAndUpdate(id, info);
       res.status(200).json({ data: Data });
    } catch (error) {
       res.json(404).json({ masg: error });
    }
   
//   res.send("upadted data here");
};

const deletedata =async (req, res) => {
    const id=req.query.Id;
    try {
          const Data = await models.findByIdAndDelete(id);
          res.status(200).send(`Task with id ${id} is deleted `);
    } catch (error) {
       res.json(404).json({ masg: error });
    }

};

module.exports = { getAlldata, getdata, createdata, updatedata, deletedata };
