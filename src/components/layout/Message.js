import { useState, useEffect } from "react";

import styles from "./css/Message.module.css";

function Message({ msg, type, update }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return false;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [update]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>
          <p>{msg}</p>
        </div>
      )}
    </>
  );
}

export default Message;
