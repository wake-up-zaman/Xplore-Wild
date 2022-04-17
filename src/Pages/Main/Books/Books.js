import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'
const Books = () => {
    const [books,setBooks]=useState([])
    
    useEffect( ()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data));
    },[])
    return (
        <div id='books'>
            <h2 className='text-center mt-4 '>Books</h2>
            <div className='d-flex align-items-center justify-content-center mb-4'>
                <div style={{ height: '1.5px' }} className='bg-secondary w-25 text-center '></div>
                <p className='mt-2 px-2'></p>
                <div style={{ height: '1.5px' }} className='bg-secondary w-25 text-center '></div>
            </div>
            <div id='services' className='container mt-5'>
                <div className='row'>
                    <div className='services-container-books'>
                        {
                            books.map(book => <Book
                                key={book.id}
                                book={book}
                            ></Book>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Books;