import {
    SET_HEADER_LINKS, 
    SET_NAVBAR_LINKS
} from "../actions/types";

const INITIAL_STATE = {
    headerLinks: [
        {
            title: 'this is a test.'
        },
        {
            title: 'to see if its working.'
        }
    ],
    navbarLinks: [
        {
            title: 'my account.'
        },
        {
            title: 'my bag.'
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state, 
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state, 
                navbarLinks: action.payload
            }
        default: return state;
    }
}