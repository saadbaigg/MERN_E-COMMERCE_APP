import React from 'react'
import styles from "./Message.module.css";

const Message = ({ text }) => {
    return (
        <div className={styles.container}>
            <p>{text}</p>
        </div>
    )
}

export default Message
