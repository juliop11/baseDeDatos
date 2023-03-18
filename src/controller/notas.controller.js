const connection = require("../database");


function getMedia(request, response) {

    let sql;

    if (request.query.idstudents == null) {

        sql = "SELECT * FROM students";
    }
    else {
        sql = "SELECT AVG (mark) FROM marks WHERE id=" + request.query.idstudents;
    }

    connection.query(sql, function (err, result) {

        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}


function getApuntadas(request, response) {

    let sql;

    if (request.query.idstudents == null) {

        sql = `SELECT first_name, last_name, title FROM students 
        JOIN grupos ON (students.idgroups=grupos.idgroups)
        JOIN subject_teacher ON(grupos.idgroups=subject_teacher.idgroups)
        JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects)`;
    }
    else {
        sql = `SELECT first_name, last_name, title FROM students 
        JOIN grupos ON (students.idgroups=grupos.idgroups)
        JOIN subject_teacher ON(grupos.idgroups=subject_teacher.idgroups)
        JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects)WHERE idstudents=` + request.query.idstudents;
    }

    connection.query(sql, function (err, result) {

        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}

function getImpartidas(request, response) {

    let sql;

    if (request.query.idteachers == null) {

        sql = `SELECT first_name, last_name, title
         FROM teachers JOIN subject_teacher  ON (teachers.idteachers=subject_teacher.idteachers)
         JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects)`;
    }
    else {
        sql = `SELECT first_name, last_name, title
        FROM teachers JOIN subject_teacher  ON (teachers.idteachers=subject_teacher.idteachers)
        JOIN subjects ON(subject_teacher.idsubjects=subjects.idsubjects)WHERE idteachers=` + request.query.idteachers;
    }

    connection.query(sql, function (err, result) {

        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}



module.exports = { getMedia, getApuntadas, getImpartidas };