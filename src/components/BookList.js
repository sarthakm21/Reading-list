import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext);  

    let element = books.map(book => {
        return ( <BookDetails key={book.id} book={book} /> )
    });

        return books.length ? (
            <div className="book-list">
                <ul>
                    {element}
                </ul>
            </div>
        )
        : 
        (<div className="empty">No Books to read. Go on and add some!</div>)
}
 
export default BookList;