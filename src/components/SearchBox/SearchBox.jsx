import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  const id = useId();

  function handleInput(event) {
    setFilter(event.target.value);
  }

  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>Find contacts by name</label>

      <input
        type="text"
        id={id}
        name={filter}
        onInput={handleInput}
        className={css.filter}
      />
    </div>
  );
}
