import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-75e9c.firebaseio.com/"
});

export default instance;
