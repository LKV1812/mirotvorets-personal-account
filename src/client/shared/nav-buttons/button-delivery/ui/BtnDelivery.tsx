import React from "react";
import styles from "../../common-styles/btn-nav.scss";

export const BtnDelivery = () => {
    return (
        <button className={styles.item} type="button" data-target="delivery">
            <div className={styles.contentWrap}>
                <div className={styles.icon}>
                    <svg width="32" height="21" viewBox="0 0 32 21" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.45952 0.783936H18.9927C19.2467 0.783936 19.4523 0.989509 19.4523
                            1.24349V5.5394H24.7182C24.8441 5.5394 24.9642 5.59087 25.0509
                            5.68217L30.7742 11.6962C30.8557 11.7817 30.901 11.895 30.901
                            12.013V17.3015C30.901 17.5555 30.6954 17.7611 30.4414
                            17.7611H27.2524C27.0962 19.0209 26.0205 20 24.7182 20C23.4149 20 22.338
                            19.0212 22.1817 17.7611H18.9927H10.6433C10.4873 19.0209 9.41379 20
                            8.11417 20C6.81057 20 5.73368 19.0212 5.57713 17.7611H1.45952C1.20554
                            17.7611 0.999968 17.5555 0.999968 17.3015V1.24318C0.999968 0.989816
                            1.20585 0.783936 1.45952 0.783936ZM24.7185 19.0809C25.621 19.0809 26.3551
                            18.3472 26.3551 17.4455C26.3551 16.543 25.621 15.8089 24.7185 15.8089C23.8147
                            15.8089 23.0794 16.543 23.0794 17.4455C23.0794 18.3475 23.8147 19.0809
                            24.7185 19.0809ZM24.7185 14.8898C25.9197 14.8898 26.9271 15.7237 27.1994
                            16.8423H29.9825V12.1968L24.5218 6.45851H19.4529V16.8423H22.2357C22.5077
                            15.7237 23.5163 14.8898 24.7185 14.8898ZM8.11448 19.0809C9.01428 19.0809
                            9.7459 18.3472 9.7459 17.4455C9.7459 16.543 9.01398 15.8089 8.11448
                            15.8089C7.21038 15.8089 6.47479 16.543 6.47479 17.4455C6.47479 18.3475
                            7.21038 19.0809 8.11448 19.0809ZM1.91908 16.8423H5.63074C5.90341 15.7237
                            6.91198 14.8898 8.11448 14.8898C9.31299 14.8898 10.3185 15.7237 10.5902
                            16.8423H18.5335V1.70304H1.91938L1.91908 16.8423Z"
                            fill="white" stroke="white" stroke-width="0.5"/>
                    </svg>
                </div>
                <div className={styles.name}>Вызвать</div>
            </div>
        </button>
    )
}