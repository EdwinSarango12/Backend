// requerir modulos 
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; //permite conectar backend con frontend 

// Inicializaciones 
const app = express()
dotenv.config()

//configuraciones 
app.set('port', process.env.PORT || 3000)  // cualquier dato que no sea sensible 
app.use(cors())  //middleware = intermediario que hace las peticiones entre backend y frontend 

//Middlewares
app.use(express.json())

//rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

//exportar la instancia
export default app



