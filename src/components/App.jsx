import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './FilterContact/FilterContact';
import { ContactList } from './ContactList/ContactList';
import { Title, SubTitle } from './AppStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from 'redux/selector';
import { filterContacts } from 'redux/filterSlice';
import { useEffect } from 'react';
import { fetchContacts, addContact } from 'redux/Contacts/contactsOperation';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isDublicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const onAddContacts = data => {
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts `);
    }
    dispatch(addContact(data));
  };

  const filterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const getFilters = () => {
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onAddContacs={onAddContacts} />
      {contacts.length !== 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <Filter onChange={filterChange} value={filter} />
          <ContactList items={getFilters()} />
        </>
      )}
    </>
  );
};
