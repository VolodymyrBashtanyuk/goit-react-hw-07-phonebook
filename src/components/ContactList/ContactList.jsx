import { List, Item, Button, Text } from './ContactListStyled';
import PropTypes from 'prop-types';

export const ContactList = ({ items, onDelete }) => {
  const itemList = items.map(({ id, name, phone }) => {
    return (
      <Item key={id}>
        <Text>{name}</Text> <Text>{phone}</Text>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </Item>
    );
  });

  return <List>{itemList}</List>;
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  itemList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onDelete: PropTypes.func.isRequired,
};
