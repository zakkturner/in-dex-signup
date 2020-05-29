import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Input from "../atoms/input/Input";
import SubmitBtn from "../atoms/submit-btn/SubmitBtn";
import Policy from "../atoms/policy/Policy";

import "./Sign-Up.styles.scss";

export default function SignUp() {
  let [currentStep, setStep] = useState(1);
  let [inputText, setValue] = useState("");

  let title = useRef(null);
  let subTitle = useRef(null);
  let subTitleTwo = useRef(null);
  let input = useRef(null);
  let inputTwo = useRef(null);
  let submit = useRef(null);
  let policy = useRef(null);

  let inputRef = (el) => (input = el);
  let inputTwoRef = (el) => (inputTwo = el);
  let submitRef = (el) => (submit = el);
  let policyRef = (el) => (policy = el);

  useEffect(() => {
    if (currentStep === 1) {
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
    } else if (currentStep === 2) {
      gsap.from([subTitle, subTitleTwo], {
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.5,
        ease: "power4.out",
      });

      gsap.from([input, inputTwo, submit], {
        duration: 6,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.2,
        delay: 2,
      });
    } else {
      gsap.from([title, subTitle, subTitleTwo], {
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.5,
        ease: "power4.out",
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (inputText === "") {
    //   alert("Please fill out form completely");
    // } else {
    setStep(currentStep + 1);
    // }
  };

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <main className="sign-up">
      {currentStep === 1 && (
        <>
          <h1 className="sign-up__title" ref={(el) => (title = el)}>
            join the list
          </h1>
          <div className="form-container">
            <div className="sub-titles">
              <span
                className="sub-titles__sub-title"
                ref={(el) => (subTitle = el)}
              >
                Sign Up for
              </span>
              <span
                className="sub-titles__sub-title"
                ref={(el) => (subTitleTwo = el)}
              >
                The IN-Dex Newsletter
              </span>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__group">
                <Input
                  inputRef={inputRef}
                  currentStep={currentStep}
                  // inputText={inputText}
                  // setValue={setValue}
                  // handleChange={handleChange}
                />
                <SubmitBtn
                  submitRef={submitRef}
                  // handleSubmit={handleSubmit}
                  currentStep={currentStep}
                  value="Next"
                />
              </div>
              <Policy policyRef={policyRef} />
            </form>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h1 className="sign-up__title" ref={(el) => (title = el)}>
            join the list
          </h1>
          <div className="form-container">
            <div className="sub-titles">
              <span
                className="sub-titles__sub-title"
                ref={(el) => (subTitle = el)}
              >
                Almost Done! Please Enter
              </span>
              <span
                className="sub-titles__sub-title"
                ref={(el) => (subTitleTwo = el)}
              >
                Your First and Last Name
              </span>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__group">
                <Input
                  inputRef={inputRef}
                  currentStep={currentStep}
                  className="mini"
                  inputTwoRef={inputTwoRef}
                />

                <SubmitBtn
                  submitRef={submitRef}
                  handleSubmit={handleSubmit}
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </>
      )}
      {currentStep === 3 && (
        <>
          <h1 className="sign-up__title" ref={(el) => (title = el)}>
            congratulations!
          </h1>
          <div className="form-container">
            <div className="sub-titles">
              <span
                className="sub-titles__sub-title"
                ref={(el) => (subTitle = el)}
              >
                Thank You For Signing Up!
              </span>
              <span
                className="sub-titles__sub-title"
                ref={(el) => (subTitleTwo = el)}
              >
                {" "}
                Look out for the latest news on your favorite tech.
              </span>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__group">
                <Input
                  inputRef={inputRef}
                  currentStep={currentStep}
                  className="inactive"
                />
              </div>
            </form>
          </div>
        </>
      )}
    </main>
  );
}
