import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { redirect } from "react-router-dom";
 import React, { useEffect, useState } from 'react';
const Profile = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
  
    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <p>Welcome <em className="text-decoration-underline">{user.email}</em>. You are logged in!</p>
                    <div className="d-grid gap-2">
                        {/* <button type="submit" className="btn btn-primary bg-[#74e2ca] text-[#fff] px-8 py-4 rounded-2xl" onClick={(e) => logoutUser(e)}>Logout</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile