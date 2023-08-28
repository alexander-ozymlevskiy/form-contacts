import { Component } from "react";
import ContactForm from "../ContactForm";
import ContactItem from "../ContactItem";
import "./ContactList.css";

class ContactList extends Component {
  state = {
    contacts: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  deleteContactFromList = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  addContact = (newContact) => {
    const maxId = this.state.contacts.length > 0 ? Math.max(...this.state.contacts.map((contact) => contact.id)) : 0;
    const newId = maxId + 1;
    newContact.id = newId;
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };  

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }

    if (this.state.contacts.length <= 0) {
      return (
        <>
          <p>Список контактів пустий.</p>
          <ContactForm onSaveContact={this.addContact} />
        </>
      );
    }
    const { contacts } = this.state;

    return (
      <div>
        <h1 className="heading">Список контактів</h1>
        <div className="table-container">
          <table className="fixed-table">
            <thead>
              <tr>
                <th>Ідентифікатор</th>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Телефон</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  username={contact.username}
                  phone={contact.phone}
                  onDelete={() => this.deleteContactFromList(contact.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <ContactForm onSaveContact={this.addContact} />
      </div>
    );
  }
}

export default ContactList;
