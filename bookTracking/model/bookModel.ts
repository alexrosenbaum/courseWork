import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  author: {
    type: String
  },
  date: {
    type: String,
    // required: true
  },
  genre: {
   type: String,
    // required: true
  },
 
  description: {
    type: String,
    // required: true
  },
  duration: {
    type: Number,
    // required: true
  },
  page: {
    type: Number
  }

})


export const book = mongoose.model('book', BookSchema)
export const searches = mongoose.model('searches', BookSchema)
export const genres = mongoose.model('genres', BookSchema)


