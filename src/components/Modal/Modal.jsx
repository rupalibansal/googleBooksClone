import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ open, onClose, bookDetails }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <img src={bookDetails.imageUrl} alt={bookDetails.title} />
        <div className={styles.modalRight}>
          <p onClick={onClose} className={styles.closeBtn}>
            X
          </p>
          <div className={styles.content}>
            <h2>{bookDetails.title}</h2>
            <h3>{bookDetails.price}</h3>
            {/* <h5>SubTitle -{bookDetails.subtitle}</h5> */}
            <p>
              {bookDetails.publisher
                ? `Publisher: ${bookDetails.publisher}`
                : " No Publisher found"}
            </p>
            <a href={bookDetails.previewLink} target="_blank">
              <button className={styles.previewButton}>See Book Preview</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
