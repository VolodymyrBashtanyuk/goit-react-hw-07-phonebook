import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Title } from '../../components/AppStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContact } from '../../redux/selector';
import { addContact } from '../../redux/Contacts/contactsOperation';
import { dublicate } from 'components/Notifigation/Notification';
import { ToastContainer } from 'react-toastify';

export const HomePage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const isDublicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const onAddContacts = data => {
    if (isDublicate(data)) {
      dublicate(data);
      return;
    }
    dispatch(addContact(data));
  };

  return (
    <>
      <Title>Add contacts in Phonebook</Title>
      <ContactForm onAddContacs={onAddContacts} />
      <ToastContainer />
    </>
  );
};
