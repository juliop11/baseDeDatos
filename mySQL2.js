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