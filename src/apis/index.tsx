import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://13.203.79.129:8000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};

export default useAxios;
