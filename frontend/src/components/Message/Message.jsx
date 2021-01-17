import React from "react";
import styles from "./Message.module.css";

const Message = ({ text, variant, onClick }) => {
  return (
    <div
      className={styles.container}
      style={
        variant === "success"
          ? { backgroundColor: "#85f2be" }
          : { backgroundColor: "#dc354662" }
      }
    >
      <p>{text}</p>
      <i className="fas fa-times" onClick={onClick} style={{ color: "#323232" }}></i>
    </div>
  );
};

export default Message;
