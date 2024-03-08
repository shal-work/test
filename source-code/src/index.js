import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {versionAnswer, addAnswer, getGo, shuffleOptions, getQuantity, getState, subscribe } from './redus/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
    root.render(
        <App
            state={state}
            versionAnswer={versionAnswer}
            addAnswer={addAnswer}
            getGo={getGo}
            shuffleOptions={shuffleOptions}
            getQuantity={getQuantity}
        />,
       );
};


renderEntireTree(getState());
subscribe(renderEntireTree);
