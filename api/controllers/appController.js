'use strict';

var Student = require('../models/appModel.js');

exports.list_all_students = function (req, res) {
    Student.getAllStudent(function (err, student) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', student);
        res.send(student);
    });
};

exports.create_a_student = function (req, res) {
    var new_student = new Student(req.body);

    //handles null error 
    if (!new_student.firstName || !new_student.lastName || !new_student.class || !new_student.nationality) {
        res.status(400).send({ error: true, message: 'Please provide values for firstName,lastName,class,nationality' });
    }
    else {
        Student.createStudent(new_student, function (err, student) {
            if (err)
                res.send(err);
            res.json(student);
        });
    }
};

exports.read_a_student = function (req, res) {
    if (req.query.id) {
        Student.getStudentById(req.query.id, function (err, student) {
            if (err)
                res.send(err);
            res.json(student);
        });
    }
    else if (req.query.class) {
      res.json(req.query.class);
    }
    else {
        Student.getAllStudent(function (err, student) {
            if (err)
                res.send(err);
            console.log('res', student);
            res.send(student);
        });
    }
    /*Student.getStudentById(req.params.id, function (err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });*/
};

exports.update_a_student_class = function (req, res) {
    Student.updateClassById(req.body.id, req.body.class, function (err, student) {
        if (err)
            res.send(err);
        res.json({ message: 'Student ' + req.body.id + ' updated' });
    });
};

exports.delete_a_student = function (req, res) {
    Student.remove(req.body.id, function (err, student) {
        if (err)
            res.send(err);
        res.json({ message: 'Student ' + req.body.id + ' successfully deleted' });
    });
};