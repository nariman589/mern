import React, { useContext, useState } from "react";
import { authContext } from "../HOC/RequireAuth";

function AuthPage() {
	const { registerUser, isLoading, loginUser } = useContext(authContext);
	const initialState = {
		login: "",
		password: "",
		email: "",
		isRegister: false,
	};
	const [values, setValues] = useState(initialState);
	const handleSubmit = (e) => {
		e.preventDefault();
		const { login, email, password, isRegister } = values;
		const currentUser = {
			login,
			email,
			password,
		};
		if (!isRegister) loginUser(currentUser);
		else registerUser(currentUser);
	};
	console.log(values);
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					margin: "50px auto",
					width: "400px",
				}}
			>
				<label htmlFor="Login">Login</label>{" "}
				<input
					name="Login"
					value={values.login}
					onChange={(e) =>
						setValues((v) => {
							return { ...v, login: e.target.value };
						})
					}
				/>
				<label htmlFor="Pass">Pass</label>{" "}
				<input
					name="Pass"
					value={values.password}
					type="password"
					onChange={(e) =>
						setValues((v) => {
							return { ...v, password: e.target.value };
						})
					}
				/>
				{values.isRegister && (
					<>
						<label htmlFor="email">email</label>{" "}
						<input
							name="email"
							value={values.email}
							type="email"
							onChange={(e) =>
								setValues((v) => {
									return {
										...v,
										email: e.target.value,
									};
								})
							}
						/>
					</>
				)}
				<div>
					<input
						name="lalala"
						value={values.isRegister}
						type="checkbox"
						onChange={(e) => {
							setValues((v) => {
								return { ...v, isRegister: e.target.checked };
							});
						}}
					/>
					<label htmlFor="lalala">do u want register?</label>{" "}
				</div>
				<button type="submit" disabled={isLoading}>
					{values.isRegister ? "Register" : "Login"}
				</button>
			</form>
		</div>
	);
}

export default AuthPage;
