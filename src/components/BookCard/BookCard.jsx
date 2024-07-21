import React, { useState } from "react";
import styles from "./BookCard.module.scss";
import Modal from "../Modal/Modal";

const BookCard = ({ book }) => {
  const [openModal, setOpenModal] = useState(false);
  const { volumeInfo, saleInfo } = book;
  const { title, authors, imageLinks, subtitle, publisher, previewLink } =
    volumeInfo;
  const { saleability } = saleInfo;
  const authorList = authors ? authors.join(", ") : "Unknown Author";
  const imageUrl = imageLinks
    ? imageLinks.thumbnail
    : "https://via.placeholder.com/128x196?text=No+Image";

  const price =
    saleability === "FOR_SALE"
      ? `$${saleInfo.listPrice.amount}`
      : "Out of Stock";

  const bookdetailsForModal = {
    title,
    imageUrl,
    subtitle,
    publisher,
    previewLink,
    price,
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        bookDetails={bookdetailsForModal}
      ></Modal>
      <article className={styles.backdrop}>
        <div className={styles.imageContainer}>
          <img className={styles.bookImage} src={imageUrl} alt={title} />
          <button
            className={styles.button}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Quick look
          </button>
        </div>
        <div className={styles.contentContainer}>
          <h3>{price}</h3>
          <h4>{title}</h4>
          <p>Author: {authorList}</p>
        </div>
      </article>
    </div>
  );
};

export default BookCard;
