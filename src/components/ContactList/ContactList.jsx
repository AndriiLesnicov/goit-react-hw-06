import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.list}>
      {filtered.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
}
