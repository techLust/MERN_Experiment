import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getBookList = async () => {
    try {
        const { data: { data } } = await axios.get(`${BASE_URL}/books`);
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const getUserList = async () => {
    try{
        const {data: {data}} = await axios.get(`${BASE_URL}/users`);
        return data;

    }catch(error) {
        console.log(error);
    }
};

export const getOrders = async () => {
    try{
       const{data: {data}} = await axios.get(`${BASE_URL}/orders`);
       return data;

    }catch(error){
        console.log(error);
    }
}
