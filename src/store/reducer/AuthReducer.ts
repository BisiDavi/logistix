const AuthReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'login':
            return 'login';
        case 'signup':
            return 'signup';
				default:
					return state;
    }
};

export default AuthReducer;
