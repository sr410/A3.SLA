let mongoose  = require("mongoose");

// model

let GList = mongoose.Schema({
    name: String,
    category: String,
    quantity: Number,
    notes: String,
    price: Number
    },
    {
        collection:"GList"
    }
);
module.exports=mongoose.model('List',GList);