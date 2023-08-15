import {
	REGISTER_USER_BEGIN,
	REGISTER_USER_ERROR,
	REGISTER_USER_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
	if (action.type === REGISTER_USER_BEGIN) {
		return { ...state, isLoading: true };
	}
	if (action.type === REGISTER_USER_SUCCESS) {
		return {
			...state,
			token: action.payload.token,
			user: action.payload.user,
			isLoading: false,
		};
	}
	if (action.type === REGISTER_USER_ERROR) {
	}
	throw new Error("no such action");
};

export default reducer;
