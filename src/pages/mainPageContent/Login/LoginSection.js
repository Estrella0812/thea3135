import React, { useRef, useState, useEffect } from "react"

import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import getApp from '../../../firebase'

import {X} from 'react-bootstrap-icons'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginSection(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const auth = getAuth(getApp());
    const loginRef = useRef(false);

    const [error, setError] = useState(false);
    const [login, setLoginState] = useState(false);
    const [content, setContent] = useState([]);

    console.log("loginREF : " + loginRef.current)
    console.log("LOGIN : " + login)

    async function handleSubmit(e){
        e.preventDefault()

        try{
        setError(false);
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((userCredential) => {
            // console.log(userCredential.user);
        });
        loginRef.current = true;
        setLoginState(true);
        console.log("successfully loggedin !")
        }catch{
        setError(true);
        }
    }

    async function handleLogout(){
        auth.signOut();
        loginRef.current = false;
        setLoginState(false);
    }

    const messageState = [
        <p className="gmail-state" >invalid email or password<span style={{paddingLeft: "1.5vw"}}><X size={30} className="gmail-close-icon" onClick={() => setError(!error)}></X></span></p>
    ]

    const loginForm = [
        <div className="login-container">
            <h2 className="login-header">ADMIN Login</h2>
            <p style={{color: "#F0ECE5"}}>For our team's privacy,<br></br>this page is only for authorized users.</p>
            {error && messageState}
            <form className="login-form">
            <label className="login-label">Email</label>
            <input type="email" className="login-input" ref={emailRef}></input>
            <label className="login-label">Password</label>
            <input type="text" className="login-input" ref={passwordRef}></input>
            <input type="submit" value="login" className="login-button" onClick={handleSubmit}></input>
            </form>
        </div>
    ]

    const contactSheet = [
        <div className="contact-container">
        <h2 className="contact-header">contact sheet</h2>
        <table className="contact-sheet">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Wonjo</td>
                    <td>david@gmail.com</td>
                    <td>(123) 123 - 123</td>
                </tr>
                <tr>
                    <td>Naru</td>
                    <td>naru@gmail.com</td>
                    <td>(123) 123 - 123</td>
                </tr>
                <tr>
                    <td>Ray</td>
                    <td>ray@gmail.com</td>
                    <td>(123) 123 - 123</td>
                </tr>
                <tr>
                    <td>Michelle</td>
                    <td>michelle@gmail.com</td>
                    <td>(123) 123 - 123</td>
                </tr>
                <tr>
                    <td>Jacky</td>
                    <td>jacky@gmail.com</td>
                    <td>(123) 123 - 123</td>
                </tr>
                <tr>
                    <td>King</td>
                    <td>king@gmail.com</td>
                    <td>(123) 123 - 123</td>
                </tr>
            </tbody>
        </table>
        <input type="submit" value="logout" className="login-button" onClick={handleLogout} style={{marginTop: "20px"}}></input>
        </div>
    ]

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user!=null){
                console.log("logged in!");
                setContent(contactSheet);
            }else{
                console.log("No user");
                setContent(loginForm);
            }
        })
    }, [])

    return(
        <>
            {content}
        </>
    );
}

export default LoginSection;