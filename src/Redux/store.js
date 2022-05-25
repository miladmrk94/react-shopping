import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import productReducer from "./product/productReducer";

const store = createStore(productReducer, applyMiddleware(logger));

export default store;
