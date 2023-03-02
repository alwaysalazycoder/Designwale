import axios from 'axios';
import React, { useState } from 'react'
import "../../styles/uploadTestimony.css"
import toast, { Toaster } from "react-hot-toast";
import Loader from '../utils/Loader';

const UploadTestimony = () => {

    const [loading, setLoading] = useState(false);
    const [testimony, setTestimony] = useState({
        name: "",
        designation: "",
        description: ""
    });

    const { name, designation, description } = { ...testimony };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const obj = { testimony };

        try {
            const response = await axios.post("https://designwale-backend-api.vercel.app/api/v1/upload/testimony", obj);
            if (response) {
                setLoading(false);
                toast.success("Testimony Uploaded", {
                    duration: 3000
                });
            }
        }
        catch (e) {
            toast.error("Error occured try again after some time");
            console.log("Error while uploading testimony : : ", e);
        }
    }

    const handleChange = (e) => {

        setTestimony({ ...testimony, [e.target.name]: e.target.value });
        console.log(name);
        console.log(description);
        console.log(designation);
        console.log("working");
    }
    return (
        <>
            <div className="testimony-upload-wrapper">
                {loading ? <Loader /> : (
                    <div className="testimony-upload">
                        <div className="testimony-upload-title">
                            <h2>Upload Testimony</h2>
                        </div>
                        <div className="testimony-form">
                            <input type="text" name="name" placeholder='Name' onChange={(e) => { handleChange(e) }} />
                            <input type="text" name="designation" placeholder='Designation' onChange={(e) => { handleChange(e) }} />
                            <input type="text" name="description" placeholder='Description' onChange={(e) => { handleChange(e) }} />
                            <button onClick={handleSubmit} >submit</button>
                        </div>

                    </div>
                )}

            </div>

            <Toaster
                position='top-right'
                reverseOrder={false}
            />


        </>
    )
}

export default UploadTestimony;