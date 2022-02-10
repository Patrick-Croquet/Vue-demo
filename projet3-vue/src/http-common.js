import axios from "axios";
export default axios.create({
  /*baseURL: "http://localhost:8080/api",*/
  baseURL: "http://localhost:8080/details.json",
  headers: {
    "Content-type": "application/json"
  }
});