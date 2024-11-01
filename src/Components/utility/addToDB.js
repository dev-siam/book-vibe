// Read List

import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  return [];
};
const addToStoredReadlist = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "Already Exist in read-list");
    toast.warn("This Book Already Exist in Read List")
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    console.log(id, "added to read-list");
    toast("This Book Added to Read List")
  }
};


// Wish List

const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  return [];
};
const addToStoredWishlist = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    console.log(id, "Already Exist in wish-list");
    toast.warn("This Book Already Exist in Wish List")
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    console.log(id, "added to wish-list");
    toast("This Book Added to Wish List")
  }
};


export { addToStoredReadlist, addToStoredWishlist, getStoredReadList, getStoredWishList };