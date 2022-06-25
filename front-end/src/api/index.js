import axios from "axios";

//**************************// APIs(SERVICES) CALL //************************* */

const BASE_URL = "http://localhost:8000";

//========================// GET BOOKS LIST //========================//
export const getBookList = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/api/v1/book`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//========================// GET USERS LIST //========================//
export const getUserList = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/api/v1/user`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//========================// GET ORDERS LIST //========================//
export const getOrders = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/api/v1/order`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//========================// SEARCH BOOKS BY NAME //========================//
export const searchBook = async (searchInput) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/api/v1/book/search?search=${searchInput}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//========================// SIGN UP //========================//
export const userSignUp = async (signUpData) => {
  try {
    await axios.post(`${BASE_URL}/api/v1/signup`, signUpData).then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log(err);
  }
};

//========================// LOGIN SERVICE //============================/
export const userSignIn = async (signInData) => {
  try {
    return await axios.post(`${BASE_URL}/api/v1/signin`, signInData);
  } catch (error) {
    console.log(error);
  }
};

//===============================// DELETE USER SERVICE //=========================
export const deleteUserData = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/api/v1/signup/${id}`);
  } catch (error) {
    console.log(error);
  }
};

//==============================// DELETE ORDERS SERVICE //========================
// export const deleteOrderData = async (id) => {
//   try {
//     return await axios.delete(`${BSAE_URL}/api/v1/orders/${id}`);
//   } catch (error) {}
// };
