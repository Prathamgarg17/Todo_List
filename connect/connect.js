const mongoose=require('mongoose');

const dbconnect=(url)=>{
   return mongoose.connect(url);
}

module.exports=dbconnect;