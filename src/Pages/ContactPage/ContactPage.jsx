import { useEffect } from 'react';
import { Filter } from '../../components/FilterContact/FilterContact';
import { ContactList } from '../../components/ContactList/ContactList';
import { SubTitle } from '../../components/AppStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from '../../redux/selector';
import { filterContacts } from '../../redux/filterSlice';
import { fetchContacts, removeContact } from 'redux/Contacts/contactsOperation';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
  const onDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {contacts.length !== 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <Filter onChange={filterChange} value={filter} />
          <ContactList items={getFilters()} onDelete={onDelete} />
        </>
      )}
    </>
  );
};
