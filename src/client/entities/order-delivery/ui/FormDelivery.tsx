import React from 'react'
import styles from './order-delivery.scss'
import {Calendar} from "./order-at-date/ui/calendar";
import {InputAddress} from "./input-address";
import {InputPhone} from "./input-phone";
import {TextareaCustom} from "./textarea";
import {OrderAtDate} from "./order-at-date";
import {SubmitButton} from "../../../shared";

export const FormDelivery = () => {
    return (
        <form className={styles.form} id="orderDelivery" data-states-item-submenu="close"
              data-for="form-order-account" data-action="/forms/orderDeliveryFromAccount">
            <input type="hidden" name="form_type" value="order_delivery_user_account_form"
                   data-for="header-form"/>
            <input type="hidden" name="form_title" value="Заявка из личного кабинета"
                   data-for="header-form"/>
            <input type="hidden" name="admin_email" value="zayavka@mirotvorets72.com"
                   data-for="header-form"/>
            <input type="hidden" name="captcha_token" data-captcha="captcha"
                   data-for="header-form"/>
            <div className={styles.contentWrapper}>
                <InputAddress/>
                <div id="suggest-view-container"></div>
                <div className="scroll-horizontal-invisible" id="saved-addresses"></div>
                <InputPhone/>
                <div className="scroll-horizontal-invisible" id="saved-phones"></div>
                <TextareaCustom/>
                <OrderAtDate />
                <div className={styles.buttonSubmitWrap}>
                    <SubmitButton id='deliveryOrder' title='заказать'/>
                </div>
                <div className="order-delivery__pop-up-result">
                    <div className="order-delivery__preloader">
                        <div className="order-delivery__preloader-icon"></div>
                        <div className="order-delivery__text-send">заявка отправляется...</div>
                    </div>
                </div>
            </div>
        </form>
    )
}