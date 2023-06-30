import React, {ChangeEvent, useState} from 'react';
import styles from './textarea.scss'

export const TextareaCustom = () => {
    const [value, setValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={styles.wrap}>
            <textarea
                onChange={handleChange}
                className={`${styles.field} scroll-vertical-small`}
                name="comment" placeholder="Комментарий к заявке..."
                data-for="comments" value={value}>
            </textarea>
        </div>
    )
}