import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Title } from '../../components/AppStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContact } from '../../redux/selector';
import { addContact } from '../../redux/Contacts/contactsOperation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const isDublicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const onAddContacts = data => {
    if (isDublicate(data)) {
      const notify = () =>
        toast.warn(`${data.name} is already in contacts `, {
          theme: 'light',
        });
      return notify();
    }
    dispatch(addContact(data));
    const notifys = () =>
      toast.success('You added contact in Phone book', {
        theme: 'light',
      });
    return notifys();
  };

  return (
    <>
      <Title>Add contacts in Phonebook</Title>
      <ContactForm onAddContacs={onAddContacts} />
      <ToastContainer />
    </>
  );
};
