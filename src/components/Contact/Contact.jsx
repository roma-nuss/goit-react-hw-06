// import React from "react";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contacts }) => {
  const { id, name, number } = contacts;
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.text}>
          <FaUser /> {name}
        </p>
        <p className={s.text}>
          {" "}
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
