import { ContactItem } from 'components/ContactItem/ContactItem';
import { HiMicrophone } from 'react-icons/hi';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, contactDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <>
          <li key={contact.id}>
            <HiMicrophone />
            <ContactItem details={contact} onDelete={contactDelete} />
          </li>
        </>
      ))}
    </List>
  );
};
