import axios from "axios";

const URL = "https://qa.corider.in/assignment/chat?page=0"

export const getMessages = async (page:number = 0) => {
    const { data } = await axios.get(URL+page );
    return data;
}