import { Component } from 'react';

import { GlobalStyleComponent } from '../../styles/GlobalStyles';

import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';

import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { MainTitle, Title, Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };
    const isAtList = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (isAtList) {
      alert('Already in list');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onInputChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <Container>
        <MainTitle>Phonebook 📱</MainTitle>
        <ContactForm onFormSubmit={this.onFormSubmit} btnText="Create" />
        <Title>Contacts 📑</Title>
        <Filter onInputChange={this.onInputChange} />
        <ContactList
          data={filteredContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyleComponent />
      </Container>
    );
  }
}
