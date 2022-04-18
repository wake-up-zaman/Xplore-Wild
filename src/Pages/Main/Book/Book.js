import React from 'react';
import './Book.css'
const Book = ({book}) => {
    const {name,img,description}=book;
    return (
        <div className='book d-flex  flex-column flex-md-row '>
            <img className='book-img' src={img} alt=''></img>
            <div className='description'>
                <h4>{name}</h4>
                <p>{description}</p>
                <button className='book-btn'>Read at OpenLibrary</button>
            </div>            
        </div>
    );
};

export default Book;