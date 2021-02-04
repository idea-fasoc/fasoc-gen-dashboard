var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdcSchema = new Schema(
  {
    generator: {type: String, required: true, maxlength: 100},
    fsampling: {type: Float32Array},
    target_enob: {type: Float32Array},
    optimization: {type: String, required: true, maxlength: 100},
    model: {type: String, required: true, maxlength: 100},
    platform: {type: String, required: true, maxlength: 100},
    area: {type: Float32Array},
    enob: {type: Float32Array},
    power: {type: Float32Array}
  }
);



// Virtual for author's full name
AdcSchema
.virtual('generator')
.get(function () {
  return this.generator;
});

// Virtual for author's lifespan
AdcSchema
.virtual('fsampling')
.get(function () {
  return (this.fsampling);
});


//Export model
module.exports = mongoose.model('Adc', AdcSchema);