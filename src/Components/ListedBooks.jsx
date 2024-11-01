import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from './utility/addToDB';
import Book from './Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])
    const allBooks = useLoaderData()
    useEffect(()=>{
        const storedReadList = getStoredReadList()
        console.log(storedReadList, allBooks);

        const storedReadListInt = storedReadList.map((id) => parseInt(id));
        const readBooksList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBooksList)
    },[])
    useEffect(()=>{
        const storedWishList = getStoredWishList();
        console.log(storedWishList, allBooks);

        const storedWishListtInt = storedWishList.map((id) => parseInt(id));
        const wishListList = allBooks.filter(book => storedWishListtInt.includes(book.bookId))

        setWishList(wishListList);
    },[])


    return (
      <div>
        <h3 className="text-3xl text-center font-semibold my-8">Listed Boooks</h3>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl">I have read : {readList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl">My Wishlist : {wishList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ListedBooks;