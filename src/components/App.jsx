import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle, Box } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Dimon Oleksenko', number: '666-66-66' },
    ],
    filter: '',
  };

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

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter nameFilter={filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          contactDelete={this.handleContactDelete}
        />

        <GlobalStyle />
      </Box>
    );
  }
}
