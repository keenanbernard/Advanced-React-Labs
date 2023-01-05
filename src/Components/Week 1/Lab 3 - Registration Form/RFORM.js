import React, {useState} from "react";
import "./RFORM.css";

const RFORM = () =>{

  const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [firstName, setFirstName] = useState("");
  const [, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {

    return !(firstName.length < 1 || password.value.length < 8 || role === "role" || !validateEmail(email));

  };

  const clearForm = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("")
    setEmail("")
    setRole("role");
    setPassword({value: "", isTouched: false})
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" onChange={e => setFirstName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" onChange={e => setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" type="password"
                   onChange={e => setPassword({ ...password, value: e.target.value})}
                   onBlur={() => setPassword({ ...password, isTouched: true})}/>
            {password.value.length < 8 ? PasswordErrorMessage() : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RFORM;