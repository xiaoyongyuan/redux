import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./components/home/reducers/policeReducer";
const initialState={};
const middleware=[thunk];
const store=createStore(
    reducer,
    initialState,
    //applyMiddleware(...middleware)
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store