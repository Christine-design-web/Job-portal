import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/login");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return (
        <div className=" grid h-dvh place-content-center">
            <div className="grid mx-auto place-items-center p-[3em] rounded-2xl bg-[#234eac]">
                <form className="">
                    {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    }
                    <div className="form-floating flex flex-col-reverse gap-[1em] mb-3">
                        <input id="signupEmail" type="email" className="form-control  py-[1em] px-6 rounded-2xl text-[#fff]" aria-describedby="emailHelp" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label htmlFor="signupEmail" className="form-label">Enter an email address for your username</label>
                    </div>
                    <div className="form-floating flex flex-col-reverse gap-[1em] mb-3">
                        <input id="signupPassword" type="password" className="form-control py-[1em] px-6 rounded-2xl text-[#fff] " placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <label htmlFor="signupPassword" className="form-label">Password</label>
                    </div>
                    <div className="form-floating flex flex-col-reverse gap-[1em] mb-3">
                        <input id="confirmPassword" type="password" className="form-control py-[1em] px-6 rounded-2xl text-[#fff] " placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="bg-[#044691] text-[#fff] text-base py-4 rounded-full cursor-pointer px-[1em]" onClick={(e) => signupWithUsernameAndPassword(e)}>Signup</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Go back to login? <Link to="/">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup