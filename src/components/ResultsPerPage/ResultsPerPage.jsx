import React from "react";

const ResultsPerPage = ({ resultsPerPage, onChange }) => {
  return (
    <div>
      <label>Results per page:</label>
      <select value={resultsPerPage} onChange={onChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
};

export default ResultsPerPage;
