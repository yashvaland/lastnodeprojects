const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb+srv://yashvaland94:z2m1pktB6NmGtrtz@cluster0.mkrd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
module.exports=connection