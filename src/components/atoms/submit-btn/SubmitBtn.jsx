import React from "react";
import "./SubmitBtn.styles.scss";

export default function SubmitBtn({ submitRef, handleSubmit, value }) {
  return (
    <input
      type="submit"
      name="submit"
      className="submit"
      value={value}
      ref={submitRef}
      onClick={handleSubmit}
    />
  );
}
