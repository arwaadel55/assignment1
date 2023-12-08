import mongoose from "mongoose";
const connectDB = async () => {
  return await mongoose.connect('mongodb+srv://task1:01002367427@cluster0.2pxcoag.mongodb.net/task1')
    .then((result) => console.log(`DB CONNECTED SUCCESSFULLY.........`))
    .catch((err) => console.log(`Fail to connect on DB.....${err}`));
};
export default connectDB