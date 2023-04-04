import React from 'react'
import styles from './show-recycling-list.scss'

export const ShowListButton = () => (
    <button className={styles.button} id="btn-store-houses" type="button">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
        >
            <path
                fill="#2E7D32"
                d="M42.534 23.788c1.612 3.586-1.367 7.132-2.766 7.16h-3.484l-5.233-9.287 7.717-4.465 3.706 6.408.06.184zM24.097 8.276l-1.943-2.262h-2.096c-1.688-.027-3.746.57-4.96 2.308l-.093.152-3.705 6.41 7.719 4.467 5.599-9.152-.521-1.923zm-8.693 31.627c-3.921-.397-5.635-4.405-4.967-5.652L12.016 31h11.561l-.578 8.934h-7.412l-.183-.031z"
            />
            <path
                fill="#4CAF50"
                d="M39.467 30.896c1.063-.031 1.786-.666 2.688-1.972l-5.881 9.902c-.423.94-1.002 1.094-1.608 1.035h-5.197l-.031 3.157-4.376-7.596 4.405-7.685v3.157h10v.002zM22.666 7.197c-.819-1.311-1.996-1.182-2.366-1.182h10.813c1.033-.097 1.457.3 1.732.878l2.582 4.497 2.731-1.579-4.375 7.626-8.839.033 2.703-1.58-4.981-8.693zM10.662 33.782c-.515.913-.366 1.786.264 3.045l-5.551-9.788c-.577-.854-.425-1.399-.093-1.916l2.613-4.495-2.732-1.611h8.781l4.467 7.656-2.735-1.577-5.014 8.686z"
            />
        </svg>
    </button>
)