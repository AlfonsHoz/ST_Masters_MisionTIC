const { Schema, model } = require("mongoose");

const acumSchema = new Schema({
  acum: Number,
  dif: String,
});

module.exports = model("acumulators", acumSchema);
