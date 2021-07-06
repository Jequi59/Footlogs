const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  matchLeague: { type: String, required: true },
  matchDay: { type: Number, required: true },
  teamDom: { type: String, required: true },
  scoreDom: { type: Number, required: true },
  teamExt: { type: String, required: true },
  scoreExt: { type: Number, required: true },
  matchDate: { type: Date, required: true },
  matchHour: { type: String, required: true }
});

module.exports = mongoose.model('Match', matchSchema);