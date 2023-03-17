let mysql = require("mysql2");

let connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Puertollano1",
    database: "museo"
})


connection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Conexion directa");
    }
});

// let params = 'prestamo'
// let sql = "SELECT piezas.last_name, estado.estado, ubicacion.ubicacion, estado.fechadevolucion, propietario.last_name, propietario.first_name, propietario.email, propietario.direccion FROM piezas JOIN estado ON(piezas.idestado=estado.idestado) JOIN ubicacion ON(piezas.idubicacion=ubicacion.idubicacion) JOIN propietario ON(piezas.idpropietario=propietario.idpropietario) where estado.estado = ?";
// connection.query(sql, params, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("");
//         console.log(result);
//     }
// })

// let sql = `SELECT colecciones.colecciones, COUNT(*) AS total FROM piezas JOIN colecciones ON (piezas.idcolecciones=colecciones.idcolecciones)
// GROUP BY colecciones.idcolecciones  ORDER BY total DESC`;

// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("");
//         console.log(result);
//     }
// })