import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getPhoneBookValue } from '../redux/phoneBookSlice';
import { styled } from 'styled-components';
import { getFilter } from '../redux/filterSlice';
import Notiflix from 'notiflix';

export const ContactList = ({ onDeleteContact }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(getPhoneBookValue);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    Notiflix.Notify.failure('Contact succesfully deleted!');
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Buton onClick={() => handleDeleteContact(contact.id)} type="button">
            Delete
          </Buton>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  border: 2px dotted black;
  background-color: aliceblue;
  border-radius: 5px;
  list-style-type: none;
  padding: 10px;
  margin-bottom: 0;
  height: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;

const Buton = styled.button`
  border: 2px solid red;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;
