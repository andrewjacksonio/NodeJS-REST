'use strict';

var sql = require('./db.js');

//Student object constructor
var Student = function (student) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.class = student.class;
    this.nationality = student.nationality;
    this.created_at = new Date();
};

Student.createStudent = function (newStudent, result) {
    sql.query("INSERT INTO students set ?", newStudent, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Student.getStudentById = function (studentId, result) {
    sql.query("Select * from students where id = ? ", studentId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Student.getAllStudent = function (result) {
    sql.query("Select * from students", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('students : ', res);

            result(null, res);
        }
    });
};

Student.updateClassById = function (id, studentClass, result) {
    sql.query("UPDATE students SET class = ? WHERE id = ?", [studentClass, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Student.remove = function (id, result) {
    sql.query("DELETE FROM students WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Student;