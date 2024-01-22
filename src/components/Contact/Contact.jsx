import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <li className={css.contact}>
      <div>
        <p className={css.info}>
          <IoPersonSharp className={css.icon} size="18" /> {name}
        </p>
        <p className={css.info}>
          <BsFillTelephoneFill className={css.icon} size="18" /> {number}
        </p>
      </div>
      <button>Delete</button>
    </li>
  );
}
