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

let sql ="SELECT first_name, last_name, title FROM students JOIN grupos ON (students.idgroups=grupos.idgroups)JOIN subject_teacher ON(grupos.idgroups=subject_teacher.idgroups)JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects)";
connection.query(sql, function(err, result){
    if(err)
    console.log(err);
    else{
        console.log("");
        console.log(result);
    }
})

// let sql ="SELECT first_name, last_name, title FROM subject_teacher JOIN teachers  ON (subject_teacher.idteachers=teachers.idteachers)JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects)";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("");
//         console.log(result);
//     }
// })

// let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title, COUNT(students.idstudents) FROM students JOIN grupos ON(students.idgroups=grupos.idgroups)JOIN subject_teacher ON(subject_teacher.idgroups=grupos.idgroups)JOIN teachers ON(subject_teacher.idteachers=teachers.idteachers)JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects) GROUP BY subjects.title";

// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("");
//         console.log(result);
//     }
// })