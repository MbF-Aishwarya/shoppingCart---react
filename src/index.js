import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';



import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
