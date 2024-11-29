import s from "./ContactNotFound.module.css";

const ContactNotFound = () => {
  return (
    <ul>
      <li className={s.item}>
        <p className={s.text}>contacts not found</p>
      </li>
    </ul>
  );
};

export default ContactNotFound;
