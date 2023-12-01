import axios from "axios";

// Add a request interceptor

const instance = axios.create({
  baseURL: "https://your-api-base-url", // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    // You can add additional headers if needed
  },
});

export default instance;
