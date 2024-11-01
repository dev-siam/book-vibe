import React from 'react';
import bannerImage from '../assets/books.jpg'
import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
      <div className="hero bg-gray-100 py-8 rounded-2xl">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="grid gap-6">
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn w-fit btn-primary">
              <NavLink to="/listedBooks">Listed Books</NavLink>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;