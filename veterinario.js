import { Schema , model } from 'mongoose';
import bcrypt from 'bcrypt';

const veterinarioSchema = new Schema({
    nombre:{
        type:String,
        required: true,
        trim: true,
    },
    apellido:{
        type:String,
        required:true,
        trim: true
    },
    direccion:{
        type:String,
        trim:true,
        default: null
    },
    celular:{
        type:String,
        trim:true,
        default:null
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    status:{
        type:Boolean,
        default:true
    },
    token:{
        type:String,
        default: null
    },
    confirmEmail:{
        type:Boolean,
        default: false
    },
    rol:{
        type: String, 
        default:'veterinario',
    }
},{
    timestamps:true
})

export default model('Veterinario',veterinarioSchema)
