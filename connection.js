const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const con = await mongoose.connect('mongodb+srv://admin:admin123@cluster0.pdqpuhh.mongodb.net/users?retryWrites=true&w=majority', {
            useNewURLParser:true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB connected:${con.connection.host}`);
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB