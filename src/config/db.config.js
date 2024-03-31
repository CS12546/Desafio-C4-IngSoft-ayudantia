import mongoose from "mongoose";
import {DB_URL} from "./env.config.js"

export async function setupDB(){
    try {
        await mongoose.connect(DB_URL)
        console.log("Conectado a la BD")
    } catch (error) {
        console.log(error);
        
    }
}