const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    Title:{
        type: String,
        required: true
    },
    Year:{
        type: Number,
        required: true
    },
    Rated:{
        type: String,
        required: true
    },
    Released:{
        type: String,
        required: true
    },
    Runtime:{
        type: String,
        required: true
    },
    Genre:{
        type: String,
        required: true
    },
    Director:{
        type: String,
        required: true
    },
    Writer:{
        type: String,
        required: true
    },
    Actors:{
        type: String,
        required: true
    },
    Plot:{
        type: String,
        required: true
    },
    Language:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    Awards:{
        type: String,
        required: true
    },
    CreatedAt:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('movies', movieSchema)