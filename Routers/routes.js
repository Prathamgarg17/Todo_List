const express = require("express");

const router = express.Router();
const {
  getAlldata,
  getdata,
  createdata,
  updatedata,
  deletedata,
} = require("../controllers/controllers");

router.route('/getdata').get(getAlldata);
router.route('/data').get(getdata).post(createdata).patch(updatedata).delete(deletedata);

module.exports=router;
