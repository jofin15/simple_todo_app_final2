import Todo from "../model/Todo.js";


export  const addTodo=async(request,response)=>{
   try {
       const newTodo= await Todo.create({
           data:request.body.data,
           createdAt:Date.now()
   
       })
       await newTodo.save() //this stores the data on the mongodb
      return response.status(200).json(newTodo) // this retrieve me back the feedback (result ) back to the browser
    
   } catch (error) {
    console.log(error);
    return response.status(500).json(error.message)
   }
}




export const getAllTodos=async(request,response)=>{
    try {
      const todos= await Todo.find({}).sort({"createdAt":-1})
       return response.status(200).json(todos) // this retrieve me back the feedback (result ) back to the browser
     
    } catch (error) {
     console.log(error);
     return response.status(500).json(error.message)
    }
}



export const toggleTodo=async(request,response)=>{
    try {
     const todoRef= await Todo.findById(request.params.id)
     const todo=await Todo.findOneAndUpdate(
        {_id:request.params.id},
        {done:!todoRef.done}
     )
     await todo.save() ;
     return response.status(200).json(todo)
    } catch (error) {
     console.log(error);
     return response.status(500).json(error.message)
    }
}


export const updateTodo=async(request,response)=>{
    try {
     
     await Todo.findOneAndUpdate(
        {_id:request.params.id},
        {data:request.body.data}
     )
        const todo=await Todo.findById(request.params.id)
     return response.status(200).json(todo)
    } catch (error) {
     console.log(error);
     return response.status(500).json(error.message)
    }
}


export const deleteTodo=async(request,response)=>{
   try {
    
  const todo=await Todo.findByIdAndDelete(request.params.id)
     
    return response.status(200).json(todo)
   } catch (error) {
    console.log(error);
    return response.status(500).json(error.message)
   }
}