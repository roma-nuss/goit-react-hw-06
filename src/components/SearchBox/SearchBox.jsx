// import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onSearch = (e) => {
    dispatch(filter(e.target.value));
  };
  return (
    <div className={s.container}>
      <p className={s.text}>Find contact by name</p>
      <input className={s.input} type="text" onChange={onSearch} />
    </div>
  );
};
export default SearchBox;
