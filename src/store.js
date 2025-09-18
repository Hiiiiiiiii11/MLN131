// store.js
import { createStore } from "redux";
import appReducer from "../src/reducer/appReducer"; // điều chỉnh đường dẫn cho phù hợp

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;