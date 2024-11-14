const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
       
    },
    profilePicture: {type:String},
    isVerified:{type:Boolean,required:true},
    
    
},{timestamps:true})

const UserModel =mongoose.models.users || mongoose.model('users',userSchema)


module.exports = {
    UserModel:UserModel
}