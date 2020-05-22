import React from "react";

import "./Sign-Up.styles.scss";

export default function SignUp() {
  return (
    <main className="sign-up">
      <h1 className="title">join the list</h1>
      <span className="sub-title">Sign Up for</span>
      <span className="sub-title">The IN-Dex Newsletter</span>
      <form>
        <div className="form-group">
          <input type="email" name="email" className="form-input" required />
          <input type="submit" name="submit" className="submit-btn">
            Next
          </input>
        </div>
        <input type="checkbox" name="policy" className="policy" />
      </form>
    </main>
  );
}
