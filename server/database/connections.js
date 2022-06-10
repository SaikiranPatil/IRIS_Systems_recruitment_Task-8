const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const con = await mongoose.connect("mongodb://localhost:8081/CollegeManagementSystem",{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`Mongo DB Connected: ${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB