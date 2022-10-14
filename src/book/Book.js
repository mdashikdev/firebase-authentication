import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {roomCount} =useParams();
    return (
        <div>
           Room: {roomCount}
        </div>
    );
};

export default Book;