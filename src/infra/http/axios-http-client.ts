import axios from "axios";

export const axiosClient =  axios.create({
  baseURL: "https://2ip08dplgl.execute-api.us-east-1.amazonaws.com/prod/v1",
  headers: {
    "Content-type": "application/json"
  }
});