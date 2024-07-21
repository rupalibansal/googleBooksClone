import { useState } from "react";
import styles from "./SearchForm.module.scss";
import searchLogo from "../../assets/magnifying-glass.svg";

const SearchForm = ({ onSubmit, parent }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Searching for: ${searchTerm}`);
    onSubmit(searchTerm);
  };

  const getInputClass = () => {
    return parent === "landingpage"
      ? styles.InputBoxStyleLandingPage
      : styles.InputBoxStyleBooksPage;
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formBody}>
        <input
          className={getInputClass()}
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search books..."
        />
        <button className={styles.formButton} type="submit">
          <img className={styles.ImageStyle} src={searchLogo}></img>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
