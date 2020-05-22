import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Input from "../atoms/input/Input";
import SubmitBtn from "../atoms/submit-btn/SubmitBtn";

import "./Sign-Up.styles.scss";

export default function SignUp() {
  let title = useRef(null);
  let subTitle = useRef(null);
  let subTitleTwo = useRef(null);
  let input = useRef(null);
  let submit = useRef(null);
  let policy = useRef(null);

  useEffect(() => {
    gsap.from([title, subTitle, subTitleTwo], {
      duration: 1,
      x: 100,
      opacity: 0,
      stagger: 0.5,
      ease: "power4.out",
    });

    gsap.from([input, submit, policy], {
      duration: 6,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.2,
      delay: 2,
    });
  });

  let inputRef = (el) => (input = el);
  let submitRef = (el) => (submit = el);

  return (
    <main className="sign-up">
      <h1 className="sign-up__title" ref={(el) => (title = el)}>
        join the list
      </h1>
      <span className="sign-up__sub-title" ref={(el) => (subTitle = el)}>
        Sign Up for
      </span>
      <span className="sign-up__sub-title" ref={(el) => (subTitleTwo = el)}>
        The IN-Dex Newsletter
      </span>
      <form className="form">
        <div className="form__group">
          <Input inputRef={inputRef} />
          <SubmitBtn submitRef={submitRef} />
        </div>
        <div className="policy" ref={(el) => (policy = el)}>
          <input type="checkbox" name="policy" className="policy__box" />
          <blockquote className="policy__text">
            I agree to receive information from Interactive Nerd in accordance
            with the following <a href="#">Privacy Policy</a>
          </blockquote>
        </div>
      </form>
    </main>
  );
}
