import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  id: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

export default mongoose.model('User', userSchema);