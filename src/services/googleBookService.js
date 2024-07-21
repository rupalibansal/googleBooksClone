export const getBooks = async (searchTerm, startIndex, maxResults) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  if (data.totalItems === 0) {
    console.log("no data found");
    throw new Error("No books found for" + searchTerm);
  }
  return data;
};
