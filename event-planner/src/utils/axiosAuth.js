import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "https://bw-corporate-event-planner.herokuapp.com",
    headers: {
      Authorization: getToken()
    }
  });
}
