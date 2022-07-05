const asynchandler=require('express-async-handler')
const Goal=require('../models/model')
// @desc get goals
// @route GET/api/goals
//@access Private

const getGoals=asynchandler( async(req,res)=>{
    const goals=await Goal.find()
    
    res.status(200).json(goals)
})

// @desc set goals
// @route POST/api/goals
//@access Private

const setGoals=asynchandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const goal=await Goal.create({
        text:req.body.text,
    })
    res.status(200).json(goal)
})

// @desc update goals
// @route PUT/api/goals/:id
//@access Private

const updateGoals=asynchandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
     new:true   
    })
    res.status(200).json(updateGoal)
})

// @desc delete goals
// @route DELETE/api/goals/:id
//@access Private

const deleteGoals=asynchandler (async(req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error('goal not found')
    }
   await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports={
    getGoals,setGoals,updateGoals,deleteGoals
}