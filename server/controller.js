import RequestService from "./service.js";

class ApiController {
	async saveName(req, res) {
		const post = await RequestService.saveName(req.body);
		res.status(200).json(post);
	}
	async getAll(req, res) {
		const data = await RequestService.getAll();
		res.status(200).json(data);
	}
	async registerUser(req, res) {
		const user = await RequestService.createUser(req.body);

		res.status(201).json(user);
	}
	async login(req, res) {
		const user = await RequestService.login(req.body);
		res.status(201).json(user);
	}
}

export default new ApiController();
