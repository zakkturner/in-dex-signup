import React from "react";

import "./Policy.styles.scss";

export default function Policy({ policyRef }) {
  return (
    <div className="policy" ref={policyRef}>
      <input type="checkbox" name="policy" className="policy__box" />
      <label className="policy__text">
        I agree to receive information from Interactive Nerd in accordance with
        the following <a href="#">Privacy Policy</a>
      </label>
    </div>
  );
}
