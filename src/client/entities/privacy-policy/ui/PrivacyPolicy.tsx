import React from 'react'
import styles from './privacy-policy.scss'

export const PrivacyPolicy = () => (
    <div className={styles.container} id="privacyPolicy" data-is='close'>
        <p>Мы собираем cookie, данные об IP-адресе и местоположении Пользователей. Оставаясь на сайте,
            <a className={styles.link} href="https://mirotvorets72.com/pages/privacy-policy-page" target="_BLANK">
                вы соглашаетесь со сбором и обработкой персональных данных
            </a>
        </p>
        <div className={styles.btnWrap}>
            <input className={styles.button} type="button" value="понятно" id="acceptedPolicy"/></div>
    </div>
)