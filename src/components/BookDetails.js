import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return (
        <li onClick={() => dispatch({type:'removeBook', id: book.id}) }>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;