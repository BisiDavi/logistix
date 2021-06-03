import React from 'react';
import TextLoop from 'react-text-loop';
import styles from '@styles/textAnimate.module.css';

const TextAnimate = () => {
    const textArray = ['Quick ', 'Safe'];

    return (
        <div className={styles.animateText}>
            <h3 className='mx-2'>Get</h3>
            <TextLoop
                springConfig={{ stiffness: 70, damping: 31 }}
                adjustingSpeed={500}
                className={styles.animated}
            >
                {textArray.map((text, index) => (
                    <h3 key={index}>{text}</h3>
                ))}
            </TextLoop>

            <h3 className='mx-2'>
                Delivery of Parcels with <b>Logistix</b>
            </h3>
        </div>
    );
};

export default TextAnimate;
