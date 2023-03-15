let mysql = require("mysql2");

let connection = mysql.createConnection({

    host       :"localhost",
    user       :"root",
    password   :"Puertollano1",
    database   :"dia1"
})


connection.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Conexion directa");
    }
});

// let grupo = "INSERT INTO grupos (name) VALUES ('a')";
// let grupo = "INSERT INTO grupos (name) VALUES ('b')";
// let grupo = "INSERT INTO grupos (name) VALUES ('c')";
// let grupo = "INSERT INTO grupos (name) VALUES ('d')";
// let grupo = "INSERT INTO grupos (name) VALUES ('e')";
// let grupo = "INSERT INTO grupos (name) VALUES ('f')";
// let grupo = "INSERT INTO grupos (name) VALUES ('g')";
// let grupo = "INSERT INTO grupos (name) VALUES ('h')";
// let grupo = "INSERT INTO grupos (name) VALUES ('i')";
// let grupo = "INSERT INTO grupos (name) VALUES ('j')";
// connection.query(grupo, function(err, resul){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Dato insertado");
//         console.log(resul);
//     }
// })

// let notas = "UPDATE marks SET mark=0";

// connection.query(notas, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Dato actualizado");
//         console.log(result);
//     }
// });

// let selec = "SELECT first_name, last_name FROM students";
// connection.query(selec, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let selecTeachers = "SELECT idteachers, first_name, last_name FROM teachers";
// connection.query(selecTeachers, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let selecMark = "DELETE FROM marks WHERE date < '2013/01/01'";
// connection.query(selecMark, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let actualizar = "UPDATE marks SET mark = 5 WHERE mark < 5";
// connection.query(actualizar, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })