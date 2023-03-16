let mysql = require("mysql2");

let connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Puertollano1",
    database: "dia1"
})


connection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Conexion directa");
    }
});


// let  media = "SELECT AVG(mark) FROM marks WHERE idsubjects = 1"
// connection.query(media, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Nota media");
//         console.log(result);
//     }
// })

// let sumaAlumnos = "SELECT count(*) AS num_alumnos FROM students"
// connection.query(sumaAlumnos, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Total alumnos");
//         console.log(result);
//     }
// })

// let selecTeachers = "SELECT * FROM grupos";
// connection.query(selecTeachers, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let selecMark = "DELETE  FROM marks WHERE (date >= '2022/01/01' AND date <= '2022/12/31' AND mark > 5)"
// connection.query(selecMark, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let tabla = "SELECT * FROM students WHERE añoIngreso = 2023";
// connection.query(tabla, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let tabla = "SELECT * FROM students WHERE añoIngreso = 2023";
// connection.query(tabla, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("Seleccion realizada");
//         console.log(result);
//     }
// })

// let sql = "SELECT idsubject, COUNT(*)AS profesores FROM subject_teacher GROUP BY idsubject";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Total alumnos");
//         console.log(result);
//     }
// })

// let sql = "SELECT idstudents, mark FROM marks WHERE (idstudents BETWEEN 1 AND 20) OR (mark >8 AND date BETWEEN '2022-01-01' AND '2022-12-31')";
// connection.query(sql, function (err, result) {
//     if (err)
//         console.log(err);
//     else {
//         console.log("Total alumnos");
//         console.log(result);
//     }
// })

// let  media = "SELECT AVG(mark) AS NOTA ,idsubjects FROM marks WHERE (date BETWEEN '2022-01-01' AND '2022-12-31') GROUP BY idsubjects"
// connection.query(media, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Nota media");
//         console.log(result);
//     }
// })

let  media = "SELECT AVG(mark) AS NOTA ,idstudents FROM marks WHERE (date BETWEEN '2022-01-01' AND '2022-12-31') GROUP BY idstudents"
connection.query(media, function(err, result){
    if(err)
    console.log(err);
    else{
        console.log("Nota media");
        console.log(result);
    }
})