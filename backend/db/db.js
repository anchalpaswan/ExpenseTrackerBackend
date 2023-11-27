const mongoose = require('mongoose');

module.exports = {
    db:() => {
        mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Database connected!'))
        .catch(err => console.error('Error connecting to database',err))
    }    
} 
