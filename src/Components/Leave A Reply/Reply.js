import React from "react";
import { useState, useEffect } from "react";

import "./Reply.css";

const Reply = () => {
  const initialValues = { userName: "", email: "", comment: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErr, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErr(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErr);
    if (Object.keys(formErr).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErr]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.userName) {
      errors.userName = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter Valid Email";
    }
    if (!values.comment) {
      errors.comment = "Please Leave Your Reply";
    }
    return errors;
  };

  const remove = () => {
    setIsSubmit(false);
  };

  return (
    <div>
      <div className="reply">
        <div className="reply_container">
          <div className="reply_head">
            <h2>Leave a Reply </h2>
            <hr />
          </div>
          <div className="reply_para">
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          {Object.keys(formErr).length === 0 && isSubmit ? (
            <div className="reply_success">
              Succesfully , Comment Has Been Posted
              <span onClick={remove}>
                <i class="fa-solid fa-trash"></i>
              </span>
            </div>
          ) : (
            ""
          )}

          <form className="reply_form" onSubmit={handleSubmit}>
            <label htmlFor="userName">Username*</label>
            <br />
            <input
              type="text"
              name="userName"
              id="userName"
              value={formValues.userName}
              onChange={handleChange}
            />
            {formErr ? (
              <p className="reply_err">{formErr.userName}</p>
            ) : (
              <div className="option"></div>
            )}
            {/* <p className="reply_err">{formErr.userName}</p> */}
            <br />
            <label htmlFor="email">Email*</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            ></input>
            <p className="reply_err">{formErr.email}</p>
            <br />
            <label htmlFor="comment">Comment*</label>
            <br />
            <textarea
              id="comment"
              name="comment"
              rows="8"
              cols="60"
              onChange={handleChange}
              value={formValues.comment}
            ></textarea>
            <p className="reply_err">{formErr.comment}</p>
            <br />
            <button id="reply_btn">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reply;
