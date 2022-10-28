import { List, Item, Button } from './ContactListStyled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/Contacts/contactsOperation';
// import PropTypes from 'prop-types';

export const ContactList = ({ items }) => {
  const dispatch = useDispatch();

  const itemList = items.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button type="button" onClick={() => dispatch(removeContact(id))}>
          Delete
        </Button>
      </Item>
    );
  });

  return <List>{itemList}</List>;
};

// ContactList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
