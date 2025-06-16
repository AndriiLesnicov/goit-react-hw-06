import { FaUser, FaPhone } from "react-icons/fa"; //
import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={css.item}>
      <div className={css.contactInfo}>
        <p className={css.name}>
          <FaUser size={18} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone size={18} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
