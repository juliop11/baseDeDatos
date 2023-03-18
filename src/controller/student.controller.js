const connection = require("../database");


function getStudents(request, response) {

    let sql;

    if (request.query.idstudents == null) {

        sql = "SELECT * FROM students";
    }
    else {
        sql = "SELECT * FROM students WHERE idstudents=" + request.query.idstudents;
    }

    connection.query(sql, function (err, result) {

        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}

function postStudents(request, response) {

    console.log(request.body);
    let sql = "INSERT INTO students (idstudents, first_name, last_name, idgroups, añoIngreso)" +
        "VALUES ('" + request.body.idstudents + "' , '" + request.body.first_name + "' , '" +
        request.body.last_name + "' , '" +
        request.body.idgroups + "' , '" +
        request.body.añoIngreso + "')"
    console.log(sql);

    connection.query(sql, function (err, result) {

        if (err)
            console.log(err);
        else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }
    })

}

function putStudents(request, response) {

    console.log(request.body);
    let params = [request.body.first_name,
    request.body.last_name,
    request.body.añoIngreso,
    request.body.idstudents]

    let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " +
        "last_name = COALESCE(?, last_name) , " +
        "añoIngreso = COALESCE(?, añoIngreso)  WHERE idstudents = ?";
    console.log(sql);

    connection.query(sql, params, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
}

function deleteStudents(request, response) {

    console.log(request.body);
    let sql = "DELETE FROM students WHERE idstudents = '" + request.body.idstudents + "'"
    console.log(sql);
    connection.query(sql, function(err, result){
        if(err)
        console.log(err);
        else{
            response.send(result)
        }

    })
}




module.exports = { getStudents, postStudents, putStudents, deleteStudents};