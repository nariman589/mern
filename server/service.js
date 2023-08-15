import dbSchema from "./models/dbSchema.js";
import userModel from "./models/userModel.js";

class RequestService {
	async getAll() {
		const data = await dbSchema.find();
		return data;
	}
	async saveName(post) {
		const createdPost = await dbSchema.create(post);
		return createdPost;
	}
	async createUser(post) {
		const createdUser = await userModel.create(post);
		const token = createdUser.createJWT();
		return { name: createdUser.login, email: createdUser.email, token };
	}
	async login(post) {
		const { login, password } = post;
		if (!login || !password) return { msg: "please provide name and password" };
		const user = await userModel.findOne({ login }).select("+password");
		if (!user) return { msg: "userNotFOund" };
		const isPasswordCorrect = await user.comparePassword(password);
		console.log(isPasswordCorrect);
		if (!isPasswordCorrect) return { msg: "incorrect password" };
		const token = user.createJWT();
		return { login: user.login, email: user.email, token };
	}
	async updateUser(post) {
		const createdUser = await userModel.create(post);
		return createdUser;
	}
}

export default new RequestService();
