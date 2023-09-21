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
  const [values, setValues] = useState({email: "", password: ""});
  const handleSubmit = async () => {
    setLoading(true);
    const {email, password} = values;
    const result = await uListApi.login(email, password);
    setLoading(false);
    if (result.status !== 200) {
      setErrorMessage("Invalid credentials");
      return;
    }
    firebase.addEvent("login_successful");
    window.location.href = "/dashboard/products";
  };
  const handleInputChange = (name, value) => {
    setValues({...values, [name]: value});
  };

  firebase.registerScreen("login");

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
            If you don't have an account <Link to="/register" className="text-primary-100"><b>you can Register</b></Link>
          </p>
        </div>
        {!!errorMessage && <p className="mt-2 text-center text-sm text-white bg-red-400 p-2 rounded">
          Error: {errorMessage}
        </p>}

        <Form loading={loading} submitCallback={handleSubmit}>
          <InputText
            placeholder="Email"
            name="email"
            value={values.email}
            changeCallback={handleInputChange}
            extraClasses="rounded-none rounded-t-md"
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
