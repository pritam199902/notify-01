import { createStore, combineReducers } from "redux";
import Notice from './NoticeReducer';
import Section from './SectionReducer';
import Institute from './InstituteReducer';


// combine all reducer
const all = combineReducers({
//   Notice,
//   Section,
  Institute 
 });

// create the store for globaly access
const store = createStore(
  all,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
