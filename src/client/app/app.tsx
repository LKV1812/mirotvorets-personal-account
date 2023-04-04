import React from 'react';
import {hot} from "react-hot-loader/root";
import './app.global.scss';
import {MainPage} from "../pages";

function AppComponent() {
    return (
        <div>
            <div className="stretch-content">
                <MainPage />
            </div>
            <div className="privacy-policy" id="privacyPolicy">
                <p>Мы собираем cookie, данные об IP-адресе и местоположении Пользователей. Оставаясь на сайте,
                    <a className="privacy-policy__link" href="/pages/privacy-policy-page" target="_BLANK">
                        вы соглашаетесь со сбором и обработкой персональных данных
                    </a>
                </p>
                <div className="privacy-policy__wrap-btn">
                    <input className="privacy-policy__button" type="button" value="понятно" id="acceptedPolicy"/></div>
            </div>
        </div>
    );
}

export const App = hot(AppComponent)