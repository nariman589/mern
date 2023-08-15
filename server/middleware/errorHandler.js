const errorHandleMiddleWare = (err, req, res) => {
	console.log("dllsdlalsd");
	res.status(500).json({ msg: "wqwqeqweqwe" });
};
export default errorHandleMiddleWare;
