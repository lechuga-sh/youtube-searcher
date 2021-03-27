import axios from "axios";
import apiAccess from "./config.json";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: apiAccess.key,
  },
});
