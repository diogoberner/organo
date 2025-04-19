import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getTeamMembers = async () => {
  const response = await axios.get(BASE_URL + "/teamMembers");
  return response.data;
};

export const createNewMember = async (member) => {
  const response = await axios.post(BASE_URL + "/teamMembers", member);
  return response.data;
};

export const deleteMember = async (id) => {
  const response = await axios.delete(`${BASE_URL}/teamMembers/${id}`);
  return response.data;
};

export const editMember = async (id, updatedMember) => {
  const response = await axios.put(
    `${BASE_URL}/teamMembers/${id}`,
    updatedMember
  );
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(BASE_URL + "/categories");
  return response.data;
};

export const createNewCategory = async (category) => {
  try {
    const response = await axios.post(BASE_URL + "/categories", category);
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao criar categoria:",
      error.response?.data || error.message
    );
    throw error;
  }
};
