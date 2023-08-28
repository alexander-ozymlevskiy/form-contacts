import React, { Component } from "react";
import "./Form.css";

class ContactForm extends Component {
  state = {
    name: "",
    username: "",
    phone: "",
    isModalOpen: false,
  };

  saveContact = () => {
    const { name, username, phone } = this.state;
    this.props.onSaveContact({ name, username, phone });
    this.setState({ name: "", username: "", phone: "", isModalOpen: false });
  };

  closeForm = () => {
    this.setState({ name: '', username: '', phone: '', isModalOpen: false });
  };

  render() {
    const { name, username, phone, isModalOpen } = this.state;

    return (
      <div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>Додати новий контакт</h3>
              <input
                type="text"
                className="input"
                placeholder="Ім'я"
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <input
                type="text"
                className="input"
                placeholder="Прізвище"
                value={username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <input
                type="text"
                className="input"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <button className="button-save" onClick={this.saveContact}>Зберегти</button>
              <button className="delete-button" onClick={this.closeForm}>Скасувати</button>
            </div>
          </div>
        )}
        <button
          className="add-contact-button"
          onClick={() => this.setState({ isModalOpen: true })}
        >
          Додати новий контакт
        </button>
      </div>
    );
  }
}

export default ContactForm;