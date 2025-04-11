import axios from "axios";

const BASE_URL = "http://localhost:4000/teamMembers";

export const getTeamMembers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createNewMember = async (member) => {
  const response = await axios.post(BASE_URL, member);
  return response.data;
};

export const deleteMember = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
