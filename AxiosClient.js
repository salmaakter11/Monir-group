import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})







const makeRequest = async (config) => {
  return await axiosClient(config)
}

export default makeRequest