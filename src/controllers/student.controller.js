const db = require('../../db')
const Student = require('../models/student.model')

exports.getAllStudents = async (req, res) => {
    try {
        const student = await Student.findAll()
        res.status(200).json({
            status: res.statusCode,
            student
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getOneStudent = async (req, res) => {
    let id = req.params.studentId
    try {
        const result = await Student.findOne({ where: { studentId: id } })
        res.status(200).json({
            result
        })
    } catch (err) {
        console.log(err)
    }
}

exports.createNewStudent = async (req, res) => {
    const {
        studentId,
        name,
        physics,
        maths,
        chemistry,
        english,
        computer } = req.body
    try {

        const student = await Student.create({
            studentId,
            name,
            physics,
            maths,
            chemistry,
            computer,
            english
        })
        res.status(201).json({
            status: res.statusCode,
            result: student
        })
    } catch (err) {
        console.log(err)
    }
}

exports.updateStudent = async (req, res) => {

    let id = req.params.studentId
    console.log(id)
    try {
        const result = await Student.update(req.body, {
            where: {
                studentId: id
            }
        })
        res.status(200).json({
            status: "Updated",
            result
        })
    } catch (err) {
        console.log(err)
    }
}

exports.deleteOneStudent = async(req,res)=>{
    
    const id = req.params.studentId
    try{

        const result  = await Student.destroy({
            where:{
                studentId : id
            }
        })
        res.status(200).json({
            status : "Deleted",
            result
        })
    }catch(err){
        console.log(err)
    }
}