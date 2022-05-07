import axios from "axios";

//************************** APIs CALL ************************* */

const BASE_URL = "http://localhost:8000";

// GET BOOKS LIST
export const getBookList = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/books`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET USERS  LIST
export const getUserList = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//GET ORDERS LIST
export const getOrders = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/orders`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// SEARCH BOOKS BY NAME

export const searchBook = async (searchInput) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/books/search?search=${searchInput}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
