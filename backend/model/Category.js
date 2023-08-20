const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      },
      product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
});

module.exports = mongoose.model("Category", categorySchema);