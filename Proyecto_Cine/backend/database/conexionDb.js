/*aca se importaria la libreria pg necesaria para conectar a postgressql, el archivo dotenv que seria un archivo
oculto que tendria la direccion de la base de datos */
import pg from 'pg';
import 'dotenv/config'
const {Pool} = pg

const connectionString = process.env.DATABASE_URL
export const db = new Pool({
    allowExitOnIdle: true,
    connectionString
})

try {
    await db.query('SELECT NOW()')
    console.log('base de datos conectada')
} catch(error){
    console.log(error)
}

