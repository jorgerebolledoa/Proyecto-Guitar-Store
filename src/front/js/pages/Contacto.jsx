import React from "react";
import "../../styles/contacto.css"
export const Contacto = () => {
  return (
    <form
      action="https://formspree.io/f/xdobjaqz"
      method="POST"
    >
      <label>
        Your email:
        <input type="email" name="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
