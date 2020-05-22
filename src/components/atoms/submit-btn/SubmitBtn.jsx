import React from "react";
import "./SubmitBtn.styles.scss";

export default function SubmitBtn({ submitRef }) {
  return (
    <input
      type="submit"
      name="submit"
      className="submit"
      value="Next"
      ref={submitRef}
    />
  );
}
