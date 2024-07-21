import BookCard from "../../components/BookCard/BookCard";
import styles from "./BooksPage.module.scss";

const BooksPage = ({ books, searchTerm }) => {
  return (
    <div>
      <h1>Books</h1>
      <h4>{`Search results for: "${searchTerm}"`}</h4>
      <main className={styles.BooksPage}>
        {!books && <p>...loading</p>}
        {books?.length > 0 &&
          books.map((book) => <BookCard key={book.id} book={book} />)}
      </main>
    </div>
  );
};

export default BooksPage;
