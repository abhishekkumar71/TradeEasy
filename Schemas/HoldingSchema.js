const { mongoose,Schema } = require("mongoose");
const  HoldingSchema  = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: Number,
  day: Number,
});
module.exports = { HoldingSchema };
