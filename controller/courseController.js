const CourseModel = require('../model/courseModel')

const CourseController = {
    addCourse: async function(req, res){
        const {name, price, description} = req.body
        const course = {
            name, price, description
        }
        const isCourseExist = await CourseModel.find({name:name}).exec()
        if(isCourseExist.length > 0){
            res.json({message:'This course already exists'})
        }
        else{
            CourseModel.create(course)
            .then(result => {
                console.log(result)
                res.json({result})
            }).catch((err) =>{
                console.log('err : ', err)
                res.status(400).json(err)
            })
        }
    },
    getCourse: async function (req, res){
        try{
            const course = await CourseModel.find().exec()
            res.json(course)
        }catch(err){
            res.status(400).json(err)
        }
    },
    updateCourse: async function(req, res){
        const  { _id } = req.body;
    ///find
    const checkName = await CourseModel.findOne({name:req.body.name}).exec()

    // check
    if(checkName !== null && _id == checkName._id){
        // console.log("_id == checkName._id",_id == checkName._id)
        res.json({message:'Please select a different name'})
    }
    else{
        // update
        CourseModel.findByIdAndUpdate({
            _id
       },{
           $set:req.body
       }).then((result)=>{
           console.log("res",result)
           res.json(result)
       }).catch((err)=>{
           res.json(err)
       })
    }
    //update
        
    },
    deleteCourse: async function(req, res){
        try{
            const courses = await CourseModel.findByIdAndDelete(req.params.id).exec()
            console.log(courses)
            res.json(courses)
        }catch(err){
            res.status(400).json(err)
        }
    }
}

module.exports = CourseController