import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './src/features/store';
import {RecoilRoot} from 'recoil'

render(
    // <Provider store={store}>
    //     <App />
    // </Provider>
    <RecoilRoot>
        <App />
    </RecoilRoot>
    ,
    document.querySelector('#root'),
);
