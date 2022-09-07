import axios from "axios";
import { getToken } from "./storage";


const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/'
});

instance.interceptors.request.use((config)=>{
  console.log(config)
  config.headers["Authorization"] = "Bearer " + getToken()
  return config
})

export default instance