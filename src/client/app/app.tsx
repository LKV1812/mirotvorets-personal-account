import React from 'react';
import {hot} from "react-hot-loader/root";
import './app.global.scss';
import {MainPage} from "../pages";

function AppComponent() {
    return (
        <div className="stretch-content">
            <MainPage />
        </div>
    );
}

export const App = hot(AppComponent)