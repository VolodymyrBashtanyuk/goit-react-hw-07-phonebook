import axios from "axios";

const instanceContact = axios.create({
  baseURL: 'https://6359a38938725a1746b554a3.mockapi.io/api/',
});

export const getContacts = async () => {
    const respons = await instanceContact.get('/contacts');
    return respons.data;
};

export const addContacts = async (data) => {
        const respons = await instanceContact.post('/contacts', data);
        return respons.data;
}
    
export const removeContacts = async (id) => {
        const respons = await instanceContact.delete( `/contacts/${id}`);
        return respons.data;
    }
