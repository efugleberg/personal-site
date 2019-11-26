import React from 'react';

const Books = props => {
    return(
        <div >
            <div className="books">
                <strong>{props.book.title}</strong>
            </div>
        </div>
    )
}

export default Books;