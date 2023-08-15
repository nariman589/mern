import React from "react";
import { useReducer } from "react";
import { useState, createContext } from "react";
import reducer from "../actions/reducer";
import AuthPage from "../pages/AuthPage";
import {
	REGISTER_USER_BEGIN,
	REGISTER_USER_ERROR,
	REGISTER_USER_SUCCESS,
} from "../actions/actions";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const initialState = {
	isLoading: false,
	user: JSON.parse(user) || null,
	token: token || null,
};

export const authContext = createContext();
function RequireAuth({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addUserToLocalStorage = ({ user, token }) => {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("token", token);
	};

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	};

	const registerUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const response = await axios.post("/api/registration", currentUser);
			const { user, token } = response.data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: {
					user,
					token,
				},
			});
			addUserToLocalStorage(user, token);
		} catch (e) {}
	};
	const loginUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		const response = await axios.post("/api/login", currentUser);
		const { user, token } = response.data;
		dispatch({
			type: REGISTER_USER_SUCCESS,
			payload: {
				user,
				token,
			},
		});
		addUserToLocalStorage(user, token);
	};
	return (
		<authContext.Provider value={{ ...state, registerUser, loginUser }}>
			{state.token ? children : <AuthPage />}
		</authContext.Provider>
	);
}

export default RequireAuth;
