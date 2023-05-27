import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'Redux/ContactsSlice';
import { getContacts, getFilter } from 'Redux/Selectors';
import { Span, Li, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  const contactFilter = useSelector(getFilter);

  const getVisibleList = () => {
    const normalizedFilter = contactFilter.toLowerCase();
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleList().map(({ id, name, number }) => {
        return (
          <Li key={id}>
            <Span>{name}: </Span>
            <Span>{number}</Span>
            <Button type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </Button>
          </Li>
        );
      })}
    </ul>
  );
};
