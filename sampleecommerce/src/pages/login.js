import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import globalConstants from "../config/constants";


const LoginPage = () => {

    const [loader, setLoader] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const loginUrl = "https://fakestoreapi.com/auth/login";

    const emailChange = (event) => {
        setEmail("kevinryan");
    }

    const onLogin = async () => {
        setLoader(true);
        const response = await axios.post(`${loginUrl}`, {
            username: email,
            password: password
        });
        const data = response.data;
        if (data?.token) {
            setLoader(false);
            localStorage.setItem('token', data.token);
            navigate(`/home`);
        }

        console.log(data)

        // navigate(`/home`);
    }

    const passwordChange = (event) => {
        setPassword("kev02937@");
    }
    const isLoginButtonDisabled = email === "" || password === "";
    return (
        <form className='login_form'>
            <h2>{globalConstants.Login_content.Sign_up}</h2>
            <small>{globalConstants.Login_message.Message}</small>
            <input type="email" id='email' name="email" placeholder='Enter your email' onChange={emailChange} />
            <input type="password" id="password" name="password" placeholder='Enter your password' onChange={passwordChange} />
            <div>
                <button
                    onClick={onLogin}
                    className={isLoginButtonDisabled ? "form_btn disable" : "form_btn"}
                    disabled={isLoginButtonDisabled}
                    type="button"
                >
                    {loader ? globalConstants.Login_content.Loading : globalConstants.Login_content.Login}
                </button>
            </div>
        </form>
    )
}


export default LoginPage;