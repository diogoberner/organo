import axios from "axios";

const BASE_URL = "http://localhost:4000/teamMembers";

export const getTeamMembers = () => {
  return axios.get(BASE_URL);
};
