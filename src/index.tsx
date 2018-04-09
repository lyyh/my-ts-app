import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { enthusiasm } from './reducers';
import { StoreState } from './stores';
import App from './App'
// import Input from './containers/Input'

const store = createStore<StoreState>(enthusiasm, {
    value: 1
})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
