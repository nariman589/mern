import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [values, setValue] = useState("");
	const [namesList, setNamesList] = useState([]);
	const getAll = async () => {
		try {
			const req = await fetch("/api/getAll", {
				method: "GET",
			});
			if (req.ok) {
				const res = await req.json();
				setNamesList(res.reverse());
			}
		} catch (e) {
			setTimeout(() => {}, 500);
		}
	};
	useEffect(() => {
		getAll();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();

		await fetch("/api/saveName", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: values,
			}),
		});
		setValue("");
		getAll();
	};
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<label htmlFor="Name">name</label>
				<input
					name="Name"
					value={values}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button type="submit">otpravit</button>
			</form>
			<div
				style={{
					display: "flex",
					alignItems: "start",
					flexDirection: "column",
					paddingLeft: "200px",
				}}
			>
				{namesList &&
					namesList.map((item, index) => (
						<div key={item + index}>
							{index} {item.name}
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
