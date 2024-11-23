/* aca se importaria la db from database/conexionDb que seria la conexion a la base de datos */
import {db} from '../database/conexionDb.js'
const create = async (email, password, username,telefono,fecha_nacimiento) =>{
    /**
     * este modelo create, realizaria el proceso de insertar los valores a la base de datos
     */
    console.log("Valores enviados a la base de datos:", { email, password, username,telefono,fecha_nacimiento });
    const query ={
        text: `
        INSERT INTO users (email, password, username, telefono, fecha_nacimiento)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING email, username, id
        `,
        values: [email,password,username,telefono,fecha_nacimiento]
    }
    const {rows} = await db.query(query)
    return rows

}
const reservar = async(username,fecha,pelicula,silla) =>{
    /**
     * este model serviria para poder reservar la fecha en la sala de cine
     */
    console.log('reserva enviada a la base de datos',{username,fecha,pelicula,silla});
    const query ={
        text:`
        INSERT INTO reservas(username,fecha,pelicula,silla) values($1,$2,$3,$4)
        RETURNING username,fecha,pelicula,silla,id`,
        values: [username,fecha,pelicula,silla]
    }
    const {rows} = await db.query(query)
    return rows
} 

const findEmail = async(email) =>{
    /**
     * aca se crearia el model de buscar por email que serviria para sacar la informacion de cierto
     * usuario mediante su email
     */
    const query ={
        text: `SELECT * FROM users where email = $1`,
        values: [email]
    }
    const {rows} = await db.query(query)
    return rows[0]
}
/**
 * aca se exportarian los diferentes modelos para utilizarlos en diferentes partes del proyecto
 */
export const UserModel ={
    create,
    findEmail,
    reservar
}
