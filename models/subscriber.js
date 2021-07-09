const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
// This model function allows us to interact directly with the database using the Schema.
