import React, { useState } from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import axios from "axios";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {
  isStrongPassword,
  isValidEmail,
  isValidName,
  isValidLinkedin,
} from "../../utils/validityCheck";
import { toast } from "react-toastify";

const SignUp = ({ toggleSlide }) => {
  const [form, setForm] = useState({
    email: "",
    password: null,
    name: "",
    LinkedIn: "",
  });
  const [ispasswordConformed, setIspasswordConformed] = useState(null);
  const [errorArray, setErrorArray] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleValueChange = (type, value, isvalid) => {
    console.log(isvalid);
    let newArray = [...errorArray];
    setForm({ ...form, [type]: value });
    if (isvalid && newArray?.includes(type)) {
      newArray.splice(type, 1);
      setErrorArray(newArray);
    }
    if (!isvalid && !newArray?.includes(type)) {
      newArray.push(type);
      setErrorArray(newArray);
    }
  };

  console.log(errorArray);
  const checkPasswordConform = (e) => {
    if (e.target.value === form.password) {
      setIspasswordConformed(true);
    } else {
      setIspasswordConformed(false);
    }
  };

  const handleSignUp = async () => {
    const newErrorArray = [...errorArray];
    Object.entries(form).forEach(([key, value]) => {
      if (value === null || value === "") {
        if (!newErrorArray?.includes(key)) newErrorArray.push(key);
      }
    });
    setErrorArray(newErrorArray);
    if (newErrorArray.length < 1 && ispasswordConformed) {
      // try {
      //   const response = await createUserWithEmailAndPassword(
      //     auth,
      //     form?.email,
      //     form?.password
      //   );
      //   // try {
      //   // const response = await axios.post(
      //   //   "https://quiz-project-d15l.onrender.com/api/signup/",
      //   //   {
      //   //     name: form.name,
      //   //     email: form.email,
      //   //     password: form.password,
      //   //   }
      //   // );
      //   //   console.log(response);
      //   //   toast.success("Signup Success");
      //   // } catch (err) {
      //   //   console.error(err);
      //   //   toast.error(err.response ? err.response.data.error : "Signup Failed");
      //   // }
      //   console.log(response);
      //   if (response) {
      //     const addToServer = await axios.post(
      //       "http://localhost:5000/user/new",
      //       { name: form.name, email: form.email, authId: response?.user?.uid }
      //     );
      //     console.log(addToServer);
      //   }
      //   toast.success("Signup Success");
      // } catch (err) {
      //   console.log(err);
      //   toast.error(err);
      // }
      let data =  {name:form?.name, email:form?.email, linkedin:form?.LinkedIn, password:form?.password };
      try {
        const response = await axios.get('https://csuite-production.up.railway.app/api/user/check', {
          params: {
            email: form?.email,
          },});
        console.log(response.data);
        if(response.data=="null"){
          try {
            const response = await axios.post('https://csuite-production.up.railway.app/api/user/signup', data, {
              headers: { 'Content-Type': 'application/json' }, // Set Content-Type header
            });
            console.log(response.data);
            toast.success("Signup Successfull!")
            setTimeout(() => {
              toggleSlide("login")
            }, 5000);
             // Handle successful response (optional)
          } catch (error) {
            console.error(error); // Handle errors
          }
        }
        else{
          toast.error("Email Already Exist!")
        }
      } catch (error) {
        console.error(error); // Handle errors
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="logo-container" style={{margin:"0px"}}>
          <img src={assets.Images.CSuiteLogo} alt="logo" className="logo-img" />
        </div>
        <h2 className="signup-title">Sign Up</h2>
        <p className="signup-subtitle">Let’s get started with your account</p>
        <form className="signup-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              className="input"
              style={{
                borderColor: errorArray?.includes("name") ? "red" : "#C7C7C7",
              }}
              onChange={(e) =>
                handleValueChange(
                  "name",
                  e.target.value,
                  isValidName(e.target.value)
                )
              }
            />
            {errorArray?.includes("name") && (
              <p className="input-error">Enter valid Name</p>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              className="input"
              style={{
                borderColor: errorArray?.includes("email") ? "red" : "#C7C7C7",
              }}
              onChange={(e) =>
                handleValueChange(
                  "email",
                  e.target.value,
                  isValidEmail(e.target.value)
                )
              }
            />
            {errorArray?.includes("email") && (
              <p className="input-error">Enter valid Email</p>
            )}
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="input-icon"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="LinkedIn"
              className="input"
              style={{
                borderColor: errorArray?.includes("LinkedIn") ? "red" : "#C7C7C7",
              }}
              onChange={(e) =>
                handleValueChange(
                  "LinkedIn",
                  e.target.value,
                  isValidLinkedin(e.target.value)
                )
              }
            />
            {errorArray?.includes("LinkedIn") && (
              <p className="input-error">Enter valid LinkedIn ID</p>
            )}
            {/* <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="input-icon"
            /> */}
          </div>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input"
              style={{
                borderColor: errorArray?.includes("password")
                  ? "red"
                  : "#C7C7C7",
              }}
              onChange={(e) =>
                handleValueChange(
                  "password",
                  e.target.value,
                  isStrongPassword(e.target.value)
                )
              }
            />
            {errorArray?.includes("password") && (
              <p className="input-error">
                Enter strong password with at least 8 characters
              </p>
            )}
            <img
              src={assets.Images.Lock_Vector}
              alt="lock-icon"
              className="input-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input"
              style={{
                borderColor: ispasswordConformed === false ? "red" : "#C7C7C7",
              }}
              onChange={(e) => checkPasswordConform(e)}
            />
            {ispasswordConformed === false && (
              <p className="input-error">Password Mismatch</p>
            )}
            <img
              src={assets.Images.Lock_Vector}
              alt="lock-icon"
              className="input-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </form>
        <div className="signup-button" onClick={() => handleSignUp()}>
          <p  style={{margin:"0px"}}>Sign Up</p>
        </div>
        <div className="login-link">
          Already have an account?{" "}
          <p  onClick={() => toggleSlide("login")} className="login-link-action">
            Log in
          </p>
        </div>
        {/* <div className="divider-container" style={{ marginTop: 0 }}>
          <div className="divider"></div>
          <p className="divider-text">or</p>
          <div className="divider"></div>
        </div>
        <div className="social-buttons">
          <div className="social-button">
            <img
              src={assets.Images.Google}
              alt="Google"
              className="social-icon"
            />
          </div>
          <div className="social-button">
            <img
              src={assets.Images.Microsoft}
              alt="Microsoft"
              className="social-icon"
            />
          </div>
          <div className="social-button">
            <img
              src={assets.Images.Apple}
              alt="Apple"
              className="social-icon"
            />
          </div>
          <div className="social-button">
            <img
              src={assets.Images.LinkedIn}
              alt="LinkedIn"
              className="social-icon"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
