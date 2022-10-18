// const mongoose = require('mongoose');

// // conection data base
// const dbconnection = () => {
// mongoose.connect(process.env.DB_URI)
// .then((conn) =>{
//     console.log(`Database Connected:${conn.connection.host}`);
// })
// .catch((err) =>{
//     console.error(`Database Eror: ${conn.connection.host}`);
//     process.exit(1);
// })
// }

// module.exports = dbconnection;
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
            const conn = await mongoose.connect(process.env.MONGO_URI)
                console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error){
        console.log(error);
        process.exit(1);

    }

}
module.exports = connectDB
