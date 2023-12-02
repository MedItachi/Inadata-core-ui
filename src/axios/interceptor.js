import axios from "axios";
import { useHistory } from "react-router-dom";

// Add a request interceptor

const instance = axios.create({
  baseURL: "https://your-api-base-url", // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    // You can add additional headers if needed
    Authorization: "Basic " + btoa("username:password"),
  },

  // error 404,500 :redirect to error page
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // console.log("Request was sent");
    return config;
  },
  (error) => {
    console.log("Something went wrong with request");
    if (error.response.status === 404) {
      console.log("404 error");
    }
    // if no response from server
    if (error.response === undefined) {
      console.log("No response from server");
    }
    return Promise.reject(error);
  }
);

export default instance;
