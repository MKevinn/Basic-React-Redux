import { act } from "react-dom/test-utils";

const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return true;
        default:
            return false;
    }
};

export default loggedReducer;