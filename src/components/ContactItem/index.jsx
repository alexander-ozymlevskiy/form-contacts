import { Component } from "react";
import "./ContactItem.css";

class ContactItem extends Component {
  render() {
    const { id, name, username, phone, onDelete } = this.props;

    return (
      <tr>
        <td className="column">{id}</td>
        <td className="column">{name}</td>
        <td className="column">{username}</td>
        <td className="column">{phone}</td>
        <td>
          <button className="button-delete" onClick={onDelete}>Видалити</button>
        </td>
      </tr>
    );
  }
}

export default ContactItem;


