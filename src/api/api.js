export default class RestApi {
  static async searchBooks({
    query,
    startIndex = 0,
    sorting,
    categories = "",
  }) {
    const selectCategories = categories ? `+subject:${categories}` : "";

    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}` +
        `${selectCategories}` +
        `&orderBy=${sorting}` +
        // eslint-disable-next-line no-undef
        `&key=${process.env.REACT_APP_API_KEY}` +
        `&maxResults=30` +
        `&startIndex=${startIndex}`
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  static async getBook(id) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?` +
        // eslint-disable-next-line no-undef
        `&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
