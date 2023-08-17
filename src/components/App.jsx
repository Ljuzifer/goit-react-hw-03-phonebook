import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle, Box } from './GlobalStyle';
import { Message } from './Message/Message';

const LOCAL_STORAGE_KEY = 'contacts-list';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextContacts));
    }
  }

  handleAddContact = newContact => {
    const enteredName = newContact.name;

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === enteredName.toLowerCase()
      )
    ) {
      alert(`${enteredName} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  handleChangeFilter = newSymbol => {
    this.setState({
      filter: newSymbol,
    });
  };

  handleContactDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    const contactsLength = this.state.contacts.length;

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter nameFilter={filter} onChange={this.handleChangeFilter} />
        {contactsLength === 0 ? (
          <Message message="Oops! Contact's list is empty" />
        ) : (
          <ContactList
            contacts={filteredContacts}
            contactDelete={this.handleContactDelete}
          />
        )}

        <GlobalStyle />
      </Box>
    );
  }
}
