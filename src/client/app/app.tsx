import React from 'react';
import {hot} from "react-hot-loader/root";
import './app.global.scss';
import {MainPage} from "../pages";
import {Nav} from '../widgets';
import {Provider} from 'react-redux';
import {setupStore} from './model/redux';

const store = setupStore()

function AppComponent() {
    return (
        <Provider store={store}>
            <div className="stretch-content">
                <MainPage/>
                <Nav/>
            </div>
        </Provider>
    );
}

export const App = hot(AppComponent)