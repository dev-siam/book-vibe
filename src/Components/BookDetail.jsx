import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadlist, addToStoredWishlist } from './utility/addToDB';

const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData()
    // console.log(data);

    const book = data.find((book) => book.bookId === parseInt(bookId));
    // console.log(book);

    const {
      bookId: currentBokId,
      image,
      bookName,
      author,
      review,
      tags,
      category,
      rating,
      totalPages,
      yearOfPublishing,
      publisher,
    } = book;

    const handleMarkAsRead =(id) => {
      /*
      * 1. what to store = bookId
      * 2. wherer to store = database
      * 3. array, list, collection
      * 4. check whether it already exists
      * 5. if it doesn't exist then Add it 
      * 6. if it exist then dont add it
      */
     addToStoredReadlist(id)
    }
    const handleAddToWishlist =(id) => {
     addToStoredWishlist(id)
    }
    



    

    return (
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-6 m-2 rounded-2xl">
          <img className="w-full rounded-lg" src={image} alt="" />
        </div>
        <div className="p-2 m-2 grid gap-1">
          <h2 className="text-4xl font-bold mb-1">{bookName}</h2>
          <p className="text-lg font-medium text-gray-500">By: {author}</p>
          <div className="border-t-2  "></div>
          <p className="text-lg font-medium">{category}</p>
          <div className="border-t-2 "></div>
          <p>
            <b>Review : </b> {review}
          </p>
          <div className="flex gap-4 my-2">
            <b>Tag</b>
            <div className="flex gap-4 items-center">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn btn-sm p-1 bg-gray-100 text-green-500 rounded-2xl"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t-2 "></div>
          <div className="flex gap-8 my-2">
            <div className="text-gray-500 grid gap-2">
              <p>Number of Pages:</p>
              <p>Publisher</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="font-bold grid gap-2">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline btn-accent"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleAddToWishlist(bookId)}
              className="btn btn-accent"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookDetail;