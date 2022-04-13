import { createStore } from "redux";
import reducers from "./reducers/index";

// here we can add any middleware such as thunk, logger, saga
const store = createStore(reducers, {});

export default store;
