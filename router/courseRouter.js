const express = require('express')
const CourseController = require('../controller/courseController')
const router = express.Router()

router.post('/course',CourseController.addCourse)
router.get('/course',CourseController.getCourse)
router.put('/course',CourseController.updateCourse)
router.delete('/course/:id',CourseController.deleteCourse)

module.exports = router