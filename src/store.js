import { createStore } from "redux";

const bikes = []


const initialState = {
    bikes : [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_bike":
            return {
                ...state,
                bikes: bikes,
            };
        case "add_bike":
            return {
                ...state,
                bikes: [...state.bikes, action.payload]
            };
        default:
            return state;
    }
};

export const loadBike = () => ({
    type: "load_bike"
});

export const addBike = (value) => ({
    type: "add_bike",
    payload: value,
});

const store = createStore(reducer);

export default store;