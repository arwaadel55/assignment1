
import { Schema, model } from 'mongoose'

const userSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
   
    age: {
        type: Number
    },

    
    heartbeat:{
        type:Number,
        required:true
    },
    motion:{
        type:Number,
        required:true
    }
}, {
    timestamps: true
})

const userModel = model('User' , userSchema)
export  default userModel