/* archivo principal para ejecutar el servidor */
import express from 'express';
import 'dotenv/config'
import userRouter from './routes/user.route.js'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static('public'));

// Rutas
app.use('/api/v1/users', userRouter);
const PORT  = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('Servidor funcionando en:' +PORT);
})

app.use(express.static('public'))