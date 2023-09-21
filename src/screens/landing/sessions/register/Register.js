import React, { useState } from 'react';
import { Link } from "react-router-dom";

import uListApi from "../../../../services/uListApi";
import firebase from "../../../../services/firebase";
import Form from "../../../../components/form/Form";
import InputText from "../../../../components/form/InputText";
import CenterContainer from "../../../../components/ui/components/CenterContainer";

function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({firstName: "", lastName: "", email: "", password: ""});
  const handleSubmit = async () => {
    setLoading(true);
    const {firstName, lastName, email, password} = values;
    let result = await uListApi.register(firstName, lastName, email, password);
    if (result.status === 422 && result.body.fields[0] && result.body.fields[0].field === "email invalid") {
      setLoading(false);
      setErrorMessage("Email already taken");
      return;
    }
    if (result.status !== 201) {
      setLoading(false);
      setErrorMessage("Unknown error");
      return;
    }

    firebase.addEvent("register_successful");

    result = await uListApi.login(email, password);
    setLoading(false);
    if (result.status !== 200) {
      setErrorMessage("Invalid credentials");
      return;
    }
    window.location.href = "/dashboard/products";
  };
  const handleInputChange = (name, value) => {
    setValues({...values, [name]: value});
  };

  firebase.registerScreen("register");

  return (
    <CenterContainer className="h-restscreen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-48 w-auto"
               src="/images/logo.jpg" alt="Workflow"/>
          <p className="text-lg font-bold text-center">uListApp</p>

          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm">
            If you already have an account, <Link to="/login" className="text-primary-100"><b>go to login</b></Link>
          </p>
        </div>
        {!!errorMessage && <p className="mt-2 text-center text-sm text-white bg-red-400 p-2 rounded">
          Error: {errorMessage}
        </p>}

        <Form loading={loading} submitCallback={handleSubmit}>
          <InputText
            placeholder="Name"
            name="firstName"
            value={values.firstName}
            changeCallback={handleInputChange}
            extraClasses="rounded-none rounded-t-md"
            required />
          <InputText
            placeholder="Last name"
            name="lastName"
            value={values.lastName}
            changeCallback={handleInputChange}
            required />
          <InputText
            placeholder="Email"
            name="email"
            value={values.email}
            changeCallback={handleInputChange}
            type="email"
            required />
          <InputText
            placeholder="Password"
            name="password"
            value={values.password}
            changeCallback={handleInputChange}
            extraClasses="rounded-none rounded-b-md"
            type="password"
            required />
        </Form>

      </div>
    </CenterContainer>
  );
}

export default Login;
