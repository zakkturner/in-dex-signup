import React from "react";
import "./SubmitBtn.styles.scss";

export default function SubmitBtn({ submitRef, value }) {
  return (
    <input
      type="submit"
      name="submit"
      id="submit"
      className="submit"
      value={value}
      ref={submitRef}
      // onClick={handleSubmit}
    />
  );
}
