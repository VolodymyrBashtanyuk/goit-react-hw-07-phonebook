import axios from "axios";

const instanceContact = axios.create({
  baseURL: 'https://6359a38938725a1746b554a3.mockapi.io/api/',
});

export const getContacts = async () => {
    const response = await instanceContact.get('/contacts');
    return response.data;
};

export const addContacts = async (data) => {
        const response = await instanceContact.post('/contacts', data);
        return response.data;
}
    
export const removeContacts = async (id) => {
  const response = await instanceContact.delete(`/contacts/${id}`);
        return response.data;
    }
