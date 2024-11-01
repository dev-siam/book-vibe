import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category } = book;
  return (
    <Link to={`/listedBooks/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 ">
        <figure className="bg-gray-700 py-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-[166px]" />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-green-700"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t my-2 border-dashed"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;