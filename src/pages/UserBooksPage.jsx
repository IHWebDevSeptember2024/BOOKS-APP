import "./UserBooksPage.css";
import { useEffect, useState } from "react";
import {
  getBooksToReadDetails,
  getBooksReadDetails,
} from "../helperFunctions/getDataFromDB";
import ToReadListRow from "../components/ToReadListRow";
import ReadingListRow from "../components/ReadingListRow";
import ReadListRow from "../components/ReadListRow";

function UserBooksPage() {
  const [BooksToReadDetails, setBooksToReadDetails] = useState([]);
  const [BooksReadingDetails, setBooksReadingDetails] = useState([]);
  const [BooksReadDetails, setBooksReadDetails] = useState([]);

  useEffect(() => {
    getBooksToReadDetails(1, setBooksToReadDetails);
    getBooksReadDetails(1, setBooksReadDetails);
  }, []);
  return (
    <div className="UserBooksPage-container">
      {
        <div className="books-to-read">
          <h2>📚 To read</h2>
          <ul>
            {BooksToReadDetails.map((book) => (
              <ToReadListRow
                key={book.id}
                book={book}
                setBooksToReadDetails={setBooksToReadDetails}
                setBooksReadDetails={setBooksReadDetails}
              />
            ))}
          </ul>
        </div>
      }
      <ReadingListRow />
      {
        <div className="books-read">
          <h2>✅ Read</h2>
          <ul>
            {BooksReadDetails.map((book) => (
              <ReadListRow
                key={book.id}
                book={book}
                setBooksReadDetails={setBooksReadDetails}
                setBooksToReadDetails={setBooksToReadDetails}
              />
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default UserBooksPage;
