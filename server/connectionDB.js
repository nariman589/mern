import mongoose from "mongoose";

const connectToDb = async () => {
	mongoose.set("strictQuery", true);
	return await mongoose.connect("mongodb://127.0.0.1:27017/sandbox");
};
export default connectToDb;
