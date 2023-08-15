import mongoose from "mongoose";

const request = new mongoose.Schema({
	name: { type: String, required: true },
});

export default mongoose.model("first", request);
