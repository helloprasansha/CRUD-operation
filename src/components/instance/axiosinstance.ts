import axios from "axios";

const axiosinstance= axios.create({
    baseURL: "https://6a5472798547b9f7111c45e1.mockapi.io/api/v1/",
    headers: {
        "Content-Type": 'application/json'
    }
})