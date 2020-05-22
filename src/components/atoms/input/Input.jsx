import React, { useRef } from "react";

import "./Input.styles.scss";

export default function Input({ inputRef }) {
  return (
    <input
      type="text"
      name="email"
      className="input"
      placeholder="Enter Email Address"
      ref={inputRef}
    />
  );
}
