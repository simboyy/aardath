'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CouponTNGSchema = new Schema({
  code: String,
  amount: Number,
  type: { type: String, default: 'Discount' },
  active: { type: Boolean, default: true },
  info: String,
  minimumCartValue: Number
});

module.exports = mongoose.model('CouponTNG', CouponTNGSchema);
