const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

/**
 * Obtener el listado de todos los usuarios registrados en la base de datos
 * @author: d4nd14z
 * @since:  Noviembre 20 / 2021
 */
router.get("/usuarios", (req, res) => {
    mysqlConnection.query("SELECT * FROM usuarios", (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

/**
 * Obtener un unico registro de un usuario registrado en la base de datos a partir de su ID
 * @author: d4nd14z
 * @since: Noviembre 20 / 2021
 */
router.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, rows, fields) => {
        if (!err){
            //res.json(rows);    //Retorna todos los registros que obtiene de la consulta
            res.json(rows[0]); //Retorna unicamente el primer resultado obtenido de la consulta
        }
        else{
            console.log(err);
        }
    });
});

/**
 * Agregar el registro de un nuevo usuario en la base de datos
 * @author: d4nd14z
 * @since: Noviembre 21 / 2021
 */
router.post("/usuario", (req, res) => {
    const { tipoid, numid, nombres, apellidos, email, login, password, rol, empresa } = req.body;
    mysqlConnection.query("INSERT INTO usuarios (tipoid, numid, nombres, apellidos, email, login, password, rol, empresa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [tipoid, numid, nombres, apellidos, email, login, password, rol, empresa], (err, rows, fields) => {
        if (!err){
            res.json({
                "id": rows.insertId,  //Obtener el mas reciente ID insertado en la base de datos  
                "tipoid": tipoid,
                "numid": numid,
                "nombres": nombres,
                "apellidos": apellidos,
                "email": email,
                "login": login,
                "password": password,
                "rol": rol,
                "empresa": empresa
            });
        }
        else{
            console.log(err);
            res.sendStatus(500);
        }
    }); 
});

/**
 * Eliminar el registro de un usuario de la base de datos
 * @author: d4nd14z
 * @since: Nov 21 / 2021
 */
router.delete("/usuario/:id", (req, res) => {
    res.send("EN CONSTRUCCION")
});


module.exports = router;

