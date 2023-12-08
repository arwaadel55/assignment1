import userModel from "../../../../DB/model/user.model.js";





export const addUser=async (req,res,next)=>{
    try{
    const {userName, email,heartbeat,motion,age}=req.body
    

    const checkUser = await userModel.findOne({ email });
    if (checkUser) {
      return res.json({ message: "Email Exist" });
    }
const user = await userModel.create({ userName, email,heartbeat,motion,age})

return res.status(201).json({ message: "Done", user})
} catch (error) {
   
    return res.json({ message: "catch error", error, stack: error.stack });
  }
}



export const getUsers=async(req,res,next)=>{
  try {
  const users = await userModel.find({});
  return res.json({ message: "Done", users });
} catch (error) {
  return res.json({ message: "Catch error", error, stack: error.stack });
}
}