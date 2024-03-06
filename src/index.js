import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './Components/App';
import './Styles/style.css';
import { HashRouter } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
 
const store = configureStore({reducer: rootReducer});

const root = createRoot(document.getElementById('root'))
root.render(<Provider store={store}><HashRouter><App/></HashRouter></Provider>);                                                                          



