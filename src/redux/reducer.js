import { SET_CLICKED_HOME_PAGE_ITEM_ID, SET_PORTFOLIO_DATA } from "./constants";

const initialState = {
    clickedHomePageItemId: null,
    portfolioData: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CLICKED_HOME_PAGE_ITEM_ID:
            return { ...state, clickedHomePageItemId: action.payload };
        case SET_PORTFOLIO_DATA:
            return { ...state, portfolioData: action.payload };
        default:
            return state;
    }
}