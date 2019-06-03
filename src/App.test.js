import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./ducks/store"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Provider store = {store}>
    <HashRouter>
         <App />
    </HashRouter>
</Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
