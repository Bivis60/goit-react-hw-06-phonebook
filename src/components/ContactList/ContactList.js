import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, removeContact } from 'Redux/ContactsSlice';
import { Span, Li, Button } from './ContactList.styled';

export const ContactList = ({ contacts, removeItem }) => {
  // export const ContactList = () => {
  // const dispatch = useDispatch();
  // const contactList = useSelector(state => state.contacts);

  return (
    <ul>
      {/* {contactList.map(({ id, name, number }) => { */}
      {contacts.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            <Span>{name}: </Span>
            <Span>{number}</Span>
            <Button
              type="button"
              onClick={() => {
                removeItem(id);
              }}
              // onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </Button>
          </Li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
