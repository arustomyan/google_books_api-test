export default class RestApi {
  static async searchBooks(query) {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}&maxResults=20`
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
