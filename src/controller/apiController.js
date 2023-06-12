
const todoItem = require('../models/todo');


exports.getItems = (req,res,next)=>{
    let ItemsQuery = todoItem.find({})
    ItemsQuery
    .select('name isComplete')
    // .select('-updatedAt').select('-createdAt').select('-__v')
    .then(Items => res.status(200).json(Items))
    .catch(next)
};

exports.getItem = (req,res,next)=>{
    let ItemQuery = todoItem.findById(req.params.id);
    ItemQuery
    .then(todoItem => res.status(200).json(todoItem))
    .catch(next);
}

exports.postItem = (req,res,next)=>{
    let Item = new todoItem(req.body);
    Item.save()
      .then(()=> res.status(200).json({message:'success',Item}))
      .catch(next)
}

exports.putItem = (req,res,next)=>{
    todoItem.updateOne({_id:req.params.id},req.body)
    .then(res.status(200).json({message:'success'}))
    .catch(next)
}

exports.deleteItem = (req,res,next)=>{
    todoItem.deleteOne({_id:req.params.id})
    .then(res.status(200).json({message:'success'}))
    .catch(next)
} 