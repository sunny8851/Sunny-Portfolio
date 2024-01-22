import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
function Form() {
  let formm: any = useRef();

  const initialValues = { username: "", email: "", Mobile: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    Mobile: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    validate(formValues).then((errors) => {
      // console.log(errors);
      setFormErrors(errors);
      if (!errors.Mobile && !errors.username && !errors.email) {
        setFormValues(initialValues);
        console.log(formErrors);
        emailjs
          .sendForm(
            "service_utaov18",
            "template_019u19s",
            formm.current ? formm.current : "",
            "9T_eDZ8YhD8nTACAG"
          )
          .then(
            (result) => {
              alert("SENT");
            },
            (error) => {
              alert("Some error ooccured ");
            }
          );
      }
    });
    // setFormErrors(errors);
    // console.log(formErrors);
  }

  async function validate(values: any) {
    const errors = { username: "", email: "", Mobile: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Mobile) {
      errors.Mobile = "Mobile no. is required";
    } else if (values.Mobile.length < 10) {
      errors.Mobile = "Please enter valid Mobile no.";
    } else if (values.Mobile.length > 10) {
      errors.Mobile = "Please enter valid Mobile no.";
    }
    return errors;
  }

  return (
    <div className="container mt-5 lg:mt-0">
      <form ref={formm} onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="flex">
            <div className="">
              <div className="font-semibold text-base mt-3">Username</div>
              <input
                className="h-12 text-input-form-form border border-gray-300 rounded-sm"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
              <p>{formErrors.username}</p>
            </div>
            <div>
              <div className="field">
                <div className="font-semibold text-base mt-3">Mobile no.</div>
                <input
                  className="h-12 text-input-form-form border border-gray-300 rounded-sm"
                  type="number"
                  name="Mobile"
                  maxLength={10}
                  placeholder="Mobile number"
                  value={formValues.Mobile}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.Mobile}</p>
            </div>
          </div>

          <div className="field">
            <div className="font-semibold text-base mt-3">Email</div>
            <input
              className="h-12 text-input-form-form border border-gray-300 rounded-sm"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <div className="font-semibold text-base mt-3">Message</div>
            <input
              className="h-12 text-input-form-form border border-gray-300 rounded-sm"
              type="text"
              name="message"
              // maxLength={10}
              placeholder="Enter your message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <button className="p-1  rounded-sm px-2" type="submit" value="Send">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
