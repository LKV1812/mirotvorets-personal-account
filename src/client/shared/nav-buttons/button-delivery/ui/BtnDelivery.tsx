import React from "react";
import styles from "../../common-styles/btn-nav.scss";
import {CarIcon} from '../../../icons';
import {useAppDispatch, useAppSelector} from '../../../../app/model/redux/models/hooks';
import {deliveryOrderSlice} from '../../../../app/model/redux/models/reducers';

export const BtnDelivery = () => {
    const isOpenDeliveryForm = useAppSelector(state => state.deliveryOrder.isOpen)
    const {toggleDeliveryFrom} = deliveryOrderSlice.actions
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(toggleDeliveryFrom(!isOpenDeliveryForm))
    }

    return (
        <button className={styles.item} type="button" onClick={handleClick}>
            <div className={styles.contentWrap}>
                <div className={styles.icon}>
                    <CarIcon />
                </div>
                <div className={styles.name}>Вызвать</div>
            </div>
        </button>
    )
}