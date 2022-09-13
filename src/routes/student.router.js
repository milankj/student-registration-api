const express = require('express')
const router = express.Router()
const db = require('../../db')
const studentController = require('../controllers/student.controller')

router
    .route('/')
    .get(studentController.getAllStudents)
    .post(studentController.createNewStudent)
    
router 
    .route('/:studentId')
    .get(studentController.getOneStudent)

router 
    .post('/update/:studentId',studentController.updateStudent)   
router
    .delete('/delete/:studentId',studentController.deleteOneStudent)

module.exports = router