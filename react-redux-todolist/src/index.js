import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/TodoListReducer.js'

// 获取store
let store = createStore(todoApp);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>

	, document.getElementById('root'));
registerServiceWorker();
