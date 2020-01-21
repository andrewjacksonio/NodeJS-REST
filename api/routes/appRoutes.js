'use strict';

module.exports = function(app) {
  var controller = require('../controllers/appController.js');

  // controller Routes
  app.route('/')
    .post(controller.create_a_student)
    .put(controller.update_a_student_class)
    .delete(controller.delete_a_student);

  app.route('/students')
    .get(controller.list_all_students);
   
  app.route('/fetchStudents')
    .get(controller.read_a_student);
};