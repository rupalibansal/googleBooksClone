import { useEffect, useState, useRef } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getBooks } from "../../services/googleBookService";
import BooksPage from "../BooksPage/BooksPage";
import Pagination from "../../components/Pagination/Pagination";
import ResultsPerPage from "../../components/ResultsPerPage/ResultsPerPage";
import googleImage from "../../assets/googlelogo_color_272x92dp.png";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [errors, setErrors] = useState("");
  const [booksData, setBooksData] = useState(null);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(19);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (searchTerm) {
      console.log("gettign data");
      getBooks(searchTerm, startIndex, resultsPerPage)
        .then((data) => {
          console.log(data);
          setBooksData(data.items);
          setTotalItems(data.totalItems);
          setEndIndex(startIndex + data.items.length - 1); //++++++++++++++++++
        })
        .catch((e) => {
          setErrors("No books found. Please enter a different search term");
        });
    }
  }, [searchTerm, startIndex, resultsPerPage]);
  const onSubmit = (searchTerm) => {
    setErrors("");
    console.log("Within parent got search term :", searchTerm);
    if (!searchTerm) {
      setErrors("Please input a search term");
    }
    setSearchTerm(searchTerm);
    setStartIndex(0); // +++++++++++++++++++++++++++++++++++
  };

  const handlePageChange = (page) => {
    // Calculate new startIndex based on page number and resultsPerPage
    setStartIndex((page - 1) * resultsPerPage);
  };

  const handleResultsPerPageChange = (e) => {
    setResultsPerPage(parseInt(e.target.value));
    setStartIndex(0); //++++++++++++++++++++
  };

  return (
    <main>
      {!booksData && (
        <>
          <div className={styles.googleContainer}>
            <img src={googleImage}></img>
            <span style={{ fontSize: "13px" }}>Books</span>
          </div>
          <SearchForm onSubmit={onSubmit} parent={"landingpage"} />
          {errors && <p style={{ color: "red" }}>{errors}</p>}
          <div>
            <p>
              Search the world's most comprehensive index of full-text books.
            </p>
            <a href="https://books.google.com/" target="_blank">
              My Library
            </a>
          </div>
        </>
      )}
      {booksData && (
        <>
          <SearchForm onSubmit={onSubmit} parent={"booksPage"} />
          <ResultsPerPage
            resultsPerPage={resultsPerPage}
            onChange={handleResultsPerPageChange}
          />
          {errors && <p style={{ color: "red" }}>{errors}</p>}
          <BooksPage books={booksData} searchTerm={searchTerm} />
          <Pagination
            totalItems={totalItems}
            resultsPerPage={resultsPerPage}
            startIndex={startIndex}
            endIndex={endIndex}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
};

export default LandingPage;
