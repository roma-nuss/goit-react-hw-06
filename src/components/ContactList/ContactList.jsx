// import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import ContactNotFound from "../ContactNotFound/ContactNotFound";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filterContacts);

  if (filterContacts.length === 0) {
    return <ContactNotFound />;
  }
  return (
    <ul className={s.list}>
      {filterContacts.map((obj) => (
        <li key={obj.id} className={s.item}>
          <Contact contacts={obj} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
